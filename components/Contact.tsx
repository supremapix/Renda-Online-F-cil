import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Contact: React.FC = () => {
  const phoneNumber = "857658841";
  const whatsappLink = `https://wa.me/258${phoneNumber}?text=Olá Milvan, gostaria de saber mais sobre o Renda Online Fácil.`;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle title="Fale Comigo" subtitle="Tem dúvidas? Quer entrar no grupo VIP? Entre em contato agora mesmo." />
        
        <div className="bg-green-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-green-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Suporte Direto</h3>
              <p className="text-gray-600">
                Meu nome é <strong>Milvan</strong>. Estou disponível para ajudar você a configurar sua conta, importar seus primeiros produtos ou desbloquear o conteúdo premium.
              </p>
              
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-mono text-lg font-semibold">{phoneNumber}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="h-6 w-6 group-hover:animate-bounce" />
                <span className="font-bold text-lg">Chamar no WhatsApp</span>
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Atendimento de Segunda a Sexta, das 8h às 18h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};