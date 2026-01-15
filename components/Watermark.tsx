import React from 'react';

export const Watermark: React.FC = () => {
  // Create a grid of watermark items to fill the screen
  const watermarkItems = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none opacity-[0.03] flex flex-wrap justify-around items-center content-around">
      {watermarkItems.map((_, i) => (
        <div 
          key={i} 
          className="transform -rotate-[25deg] whitespace-nowrap text-gray-900 font-bold text-sm sm:text-base m-8 md:m-12"
        >
          Desenvolvido 
          <span className="mx-1 text-red-600">❤️</span> 
          por 
          <a 
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-1 pointer-events-auto hover:underline"
          >
            Suprema Sites Express
          </a>
        </div>
      ))}
    </div>
  );
};