import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Share2, ShoppingBag, Globe, TrendingUp } from 'lucide-react';
import { Typewriter } from './Typewriter';

export const Affiliates: React.FC = () => {
  const cards = [
    {
      title: "Marketing de Afiliados",
      desc: "Ganhe comissões indicando produtos de terceiros. Sem estoque, sem burocracia.",
      icon: <Share2 className="h-10 w-10 text-blue-500" />,
      color: "bg-blue-50",
      phrases: ["Comissões Altas", "Zero Estoque", "Venda no Automático"]
    },
    {
      title: "Importação da China",
      desc: "Aprenda a trazer produtos baratos para revender em Moçambique com alta margem.",
      icon: <ShoppingBag className="h-10 w-10 text-orange-500" />,
      color: "bg-orange-50",
      phrases: ["Lucro de 300%", "Produtos Baratos", "Chega Rápido"]
    },
    {
      title: "Vendas Online",
      desc: "Como usar o WhatsApp e Facebook Ads para escalar suas vendas rapidamente.",
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      color: "bg-purple-50",
      phrases: ["Venda Todo Dia", "WhatsApp Milionário", "Ads que Convertem"]
    },
    {
      title: "Investimentos Digitais",
      desc: "Aplicativos que pagam de verdade e plataformas de investimento seguras.",
      icon: <TrendingUp className="h-10 w-10 text-green-500" />,
      color: "bg-green-50",
      phrases: ["Renda Passiva", "Apps Confiáveis", "Saque via M-Pesa"]
    }
  ];

  return (
    <section id="affiliates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Ganhe Dinheiro Online" 
          subtitle="Descubra as principais formas de renda extra que ensinamos em nossa plataforma." 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${card.color} flex flex-col h-full`}>
              <div className="mb-4 bg-white p-3 inline-block rounded-lg shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{card.desc}</p>
              <div className="text-xs font-bold text-gray-500 mt-auto pt-4 border-t border-gray-200/50">
                <span className="text-green-600">★ </span>
                <Typewriter phrases={card.phrases} delay={2000} typingSpeed={80} className="italic" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Torne-se um Afiliado de Sucesso</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Nós fornecemos os links, os criativos e as estratégias. Você só precisa divulgar e ganhar.
          </p>
          <a href="#contact" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors">
            Quero Meus Links de Afiliado
          </a>
        </div>
      </div>
    </section>
  );
};