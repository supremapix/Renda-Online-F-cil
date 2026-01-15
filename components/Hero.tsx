import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Sparkles, Zap, Trophy } from 'lucide-react';
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
          
          {/* Animated Icon Composition - Persuasive Money Theme */}
          <div className="relative flex justify-center items-center h-[400px] w-full">
             {/* 1. Ambient Glow Background */}
             <div className="absolute inset-0 bg-green-400 blur-[90px] opacity-20 rounded-full animate-pulse"></div>
             
             {/* 2. Rotating Rings (Orbitals) */}
             <div className="absolute w-[300px] h-[300px] border border-green-200/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute w-[260px] h-[260px] border-2 border-dashed border-emerald-300/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

             {/* 3. Main Central Emblem */}
             <div 
               className="relative z-20 group cursor-pointer"
               onClick={() => triggerMoneyRain(100)}
               onMouseEnter={() => triggerMoneyRain(10)}
             >
                {/* The Container */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-700 w-40 h-40 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-green-600/50 animate-float transform transition-transform group-hover:scale-110 border-t border-l border-white/20">
                  
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-[2.5rem] transition-opacity duration-300"></div>

                  {/* Central Icon */}
                  <div className="bg-white p-4 rounded-full shadow-inner relative overflow-hidden">
                    <DollarSign className="h-16 w-16 text-green-600 relative z-10" />
                    {/* Shiny reflection inside icon */}
                    <div className="absolute top-0 -left-10 w-8 h-full bg-white opacity-50 skew-x-12 animate-[spin_3s_infinite_linear] blur-md"></div>
                  </div>

                  {/* Sparkles attached to main icon */}
                  <Sparkles className="absolute -top-4 -right-4 h-10 w-10 text-yellow-300 animate-bounce drop-shadow-md" />
                </div>
             </div>

             {/* 4. Floating Satellite Elements (Orbiting Objects) */}
             
             {/* Growth Chart */}
             <div className="absolute top-16 right-12 lg:right-20 bg-white p-3 rounded-2xl shadow-xl animate-float-delayed z-10">
                <div className="flex items-center gap-2">
                   <div className="bg-blue-100 p-1.5 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                   </div>
                   <span className="text-xs font-bold text-gray-700">Lucro</span>
                </div>
             </div>

             {/* Instant Action */}
             <div className="absolute bottom-20 left-12 lg:left-20 bg-white p-3 rounded-2xl shadow-xl animate-float-slow z-10">
                <div className="flex items-center gap-2">
                   <div className="bg-yellow-100 p-1.5 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-600" />
                   </div>
                   <span className="text-xs font-bold text-gray-700">Rápido</span>
                </div>
             </div>

             {/* Success Trophy */}
             <div className="absolute -bottom-2 right-1/2 translate-x-16 bg-gradient-to-r from-orange-400 to-pink-500 p-3 rounded-full shadow-lg animate-bounce z-30 border-2 border-white">
                <Trophy className="h-6 w-6 text-white" />
             </div>

             {/* Background Particles */}
             <div className="absolute top-10 left-10 h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
             <div className="absolute bottom-10 right-10 h-3 w-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};