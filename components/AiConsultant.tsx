import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2 } from 'lucide-react';

export const AiConsultant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateTip = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setResponse(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        setResponse("Erro: Chave de API não configurada. Entre em contato com o suporte.");
        setLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = 'gemini-3-flash-preview';
      
      const prompt = `
        Você é um especialista financeiro chamado 'Consultor Renda Online'.
        O usuário quer uma dica rápida sobre: "${topic}".
        
        Contexto: O usuário está em Moçambique. As respostas devem considerar a realidade local (M-Pesa, Emola, Importação da China, Marketing Digital local).
        Dê uma resposta curta, motivadora e prática (máximo 3 parágrafos).
      `;

      const result = await ai.models.generateContent({
        model: model,
        contents: prompt,
      });

      setResponse(result.text || "Não foi possível gerar uma dica agora.");
    } catch (error) {
      console.error("Erro na IA:", error);
      setResponse("Ocorreu um erro ao consultar o assistente inteligente. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tips" className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
          <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
          <span className="font-semibold text-yellow-300">Consultor IA - Renda Extra</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Tem dúvida sobre como começar?</h2>
        <p className="text-gray-300 mb-8">
          Pergunte à nossa Inteligência Artificial. Digite um tema (ex: "vender sapatos", "afiliados", "investir 1000 MT").
        </p>

        <div className="max-w-lg mx-auto bg-white rounded-xl p-2 flex shadow-2xl">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ex: Como importar relógios?"
            className="flex-1 px-4 py-2 text-gray-900 outline-none rounded-l-lg"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerateTip()}
          />
          <button 
            onClick={handleGenerateTip}
            disabled={loading || !topic}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-bold transition-colors flex items-center"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </div>

        {response && (
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-left animate-fade-in">
            <h4 className="text-yellow-300 font-bold mb-2 flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Dica do Especialista:
            </h4>
            <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
              {response}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};