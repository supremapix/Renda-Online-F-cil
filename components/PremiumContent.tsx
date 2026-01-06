import React, { useState } from 'react';
import { Lock, Unlock, CheckCircle, Smartphone } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Tutorial } from '../types';
import { useMoneyRain } from '../MoneyRainContext';

interface PremiumContentProps {
  isPremium: boolean;
  onUnlock: () => void;
}

export const PremiumContent: React.FC<PremiumContentProps> = ({ isPremium, onUnlock }) => {
  const [showModal, setShowModal] = useState(false);
  const { triggerMoneyRain } = useMoneyRain();

  const tutorials: Tutorial[] = [
    { id: '1', title: 'Como criar conta no M-Pesa para Negócios', duration: '10:00', thumbnail: 'https://picsum.photos/seed/mpesa/400/250', isPremium: false },
    { id: '2', title: 'Estratégia Secreta de Vendas no WhatsApp', duration: '15:30', thumbnail: 'https://picsum.photos/seed/whatsapp/400/250', isPremium: true },
    { id: '3', title: 'Importando da China: Passo a Passo', duration: '22:15', thumbnail: 'https://picsum.photos/seed/china/400/250', isPremium: true },
    { id: '4', title: 'Criando sua Loja Virtual Grátis', duration: '18:45', thumbnail: 'https://picsum.photos/seed/store/400/250', isPremium: true },
  ];

  return (
    <section id="tutorials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Conteúdos e Tutoriais" 
          subtitle="Acesse nossa biblioteca de conhecimento. Vídeos exclusivos para mudar sua vida financeira."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((t) => (
            <div key={t.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 group relative">
              <div className="relative">
                <img src={t.thumbnail} alt={t.title} className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-xs">
                  {t.duration}
                </div>
                {t.isPremium && !isPremium && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <Lock className="h-12 w-12 text-yellow-500" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{t.title}</h4>
                <div className="flex justify-between items-center mt-4">
                  {t.isPremium && !isPremium ? (
                    <button 
                      onClick={() => {
                        triggerMoneyRain(20);
                        setShowModal(true);
                      }}
                      onMouseEnter={() => triggerMoneyRain(5)}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors hover:scale-105 transform"
                    >
                      <Lock className="h-4 w-4" />
                      Desbloquear (150 MT)
                    </button>
                  ) : (
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors">
                      <Unlock className="h-4 w-4" />
                      Assistir Agora
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative text-gray-900 shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <XIcon />
            </button>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Acesso Premium</h3>
              <p className="text-gray-600 mb-6">
                Para ter acesso completo aos conteúdos premium e vídeos exclusivos, faça o pagamento único.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Valor Total</p>
                <p className="text-3xl font-bold text-green-700">150 MT</p>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex-1">
                    <p className="font-bold text-yellow-800">M-Pesa / Emola</p>
                    <p className="text-sm text-yellow-700">Envie para: <span className="font-mono font-bold text-lg">847658841</span></p>
                    <p className="text-xs text-yellow-600 mt-1">Nome: Milvan</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    triggerMoneyRain(100); // Super heavy rain on payment
                    onUnlock();
                    setShowModal(false);
                    alert("Acesso liberado para demonstração! Na versão real, aguardaríamos a confirmação do pagamento.");
                  }}
                  className="w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors flex justify-center items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  Já fiz o pagamento
                </button>
                <p className="text-xs text-gray-400 mt-4">
                  Ao clicar, você confirma que realizou a transferência.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Simple X icon component for the modal
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);