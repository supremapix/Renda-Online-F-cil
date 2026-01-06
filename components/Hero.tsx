import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Bell, Smartphone, ShieldCheck } from 'lucide-react';
import { Typewriter } from './Typewriter';
import { useMoneyRain } from '../MoneyRainContext';

export const Hero: React.FC = () => {
  const { triggerMoneyRain } = useMoneyRain();
  
  const heroPhrases = [
    "Lucro Real",
    "Renda Extra",
    "Liberdade",
    "Sucesso Digital"
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 shadow-sm border border-green-200">
              🚀 Aprenda com Milvan
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 h-32 md:h-auto">
              Transforme seu tempo em <br className="md:hidden" />
              <span className="text-green-600 drop-shadow-sm">
                <Typewriter phrases={heroPhrases} delay={1500} />
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bem-vindo ao <strong>Renda Online Fácil</strong>. A plataforma completa para você dominar o Marketing de Afiliados, Importação e Vendas Online. O método prático para quem quer resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#tutorials"
                onMouseEnter={() => triggerMoneyRain(8)}
                onClick={() => triggerMoneyRain(40)}
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-300 transition-all hover:-translate-y-1 active:scale-95"
              >
                Ver Aulas Premium
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                onMouseEnter={() => triggerMoneyRain(5)}
                className="inline-flex justify-center items-center px-6 py-3 border-2 border-green-600 text-base font-medium rounded-full text-green-700 bg-transparent hover:bg-green-50 transition-colors"
              >
                Fale Comigo
              </a>
            </div>
          </div>
          
          {/* Animated Graphic Composition */}
          <div className="relative flex justify-center items-center h-[400px] w-full">
             {/* Background Glow */}
             <div className="absolute inset-0 bg-green-400 blur-[100px] opacity-20 rounded-full animate-pulse"></div>
             
             {/* Main Card - Smartphone/App Interface */}
             <div className="relative z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border-8 border-gray-100 w-64 md:w-72 animate-float">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-100 rounded-b-xl"></div>
                
                {/* Screen Header */}
                <div className="flex justify-between items-center mb-6 mt-4">
                  <div className="h-2 w-8 bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-4 bg-green-400 rounded-full"></div>
                </div>

                {/* Balance Card */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg mb-6 transform transition-transform hover:scale-105 cursor-default">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs opacity-80">Saldo Disponível</span>
                    <DollarSign className="h-4 w-4 opacity-80" />
                  </div>
                  <div className="text-2xl font-bold">50.000 MT</div>
                  <div className="mt-2 text-xs bg-white/20 inline-block px-2 py-0.5 rounded flex items-center w-fit">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12% hoje
                  </div>
                </div>

                {/* Notification List */}
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm animate-pulse">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Venda Realizada</div>
                      <div className="text-[10px] text-gray-500">Há 2 minutos</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-green-600">+850 MT</div>
                  </div>

                  <div className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100 shadow-sm opacity-70">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Smartphone className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-800">Novo Afiliado</div>
                      <div className="text-[10px] text-gray-500">Há 15 minutos</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Button */}
                <div className="mt-6 bg-gray-900 text-white py-3 rounded-xl text-center text-sm font-bold shadow-lg">
                  Sacar Agora
                </div>
             </div>

             {/* Floating Elements (Badges/Icons) */}
             
             {/* Top Right Notification */}
             <div className="absolute top-0 right-0 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-green-50 animate-float-delayed z-30">
               <div className="flex items-center gap-2">
                 <div className="bg-red-100 p-1.5 rounded-full relative">
                   <Bell className="h-5 w-5 text-red-500" />
                   <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                 </div>
                 <div>
                   <p className="text-xs font-bold text-gray-800">Pagamento</p>
                   <p className="text-[10px] text-gray-500">M-Pesa Recebido</p>
                 </div>
               </div>
             </div>

             {/* Bottom Left Trust Badge */}
             <div className="absolute bottom-10 left-0 md:left-10 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 animate-float-slow z-30">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">100% Seguro</p>
                    <p className="text-[10px] text-gray-500">Método Comprovado</p>
                  </div>
                </div>
             </div>

             {/* Decorative Background Elements */}
             <div className="absolute top-10 left-10 h-16 w-16 bg-yellow-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
             <div className="absolute bottom-20 right-20 h-24 w-24 bg-green-500 rounded-full blur-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};