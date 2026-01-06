import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from './Typewriter';

export const Hero: React.FC = () => {
  const heroPhrases = [
    "Lucro Real",
    "Renda Extra",
    "Liberdade",
    "Sucesso Digital"
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              Aprenda com Milvan
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 h-32 md:h-auto">
              Transforme seu tempo em <br className="md:hidden" />
              <span className="text-green-600">
                <Typewriter phrases={heroPhrases} delay={1500} />
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bem-vindo ao <strong>Renda Online Fácil</strong>. Aqui você aprende como começar seu negócio digital com baixo investimento. Marketing de afiliados, importação e estratégias seguras num só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#tutorials"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Ver Aulas Premium
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-700 bg-transparent hover:bg-green-50 transition-colors"
              >
                Fale Comigo
              </a>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-green-600 rounded-2xl transform rotate-3 opacity-10"></div>
             <img 
               src="https://picsum.photos/seed/milvanwork/800/600" 
               alt="Trabalho Digital" 
               className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
};