import React, { useState, useEffect } from 'react';
import { Menu, X, DollarSign } from 'lucide-react';

interface MoneyParticle {
  id: number;
  left: number;
  duration: number;
  delay: number;
  emoji: string;
  size: number;
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Afiliados', href: '#affiliates' },
    { name: 'Produtos', href: '#products' },
    { name: 'Dicas Premium', href: '#tutorials' },
    { name: 'IA Consultant', href: '#ai-tips' },
    { name: 'Contato', href: '#contact' },
  ];

  const triggerMoneyRain = () => {
    const emojis = ['💵', '💸', '💰', '💲', '🤑', '💎'];
    const newParticles: MoneyParticle[] = [];
    const particleCount = 50; // Amount of money

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: Date.now() + i,
        left: Math.random() * 100, // Random horizontal position (0-100%)
        duration: 2 + Math.random() * 3, // Random duration between 2s and 5s
        delay: Math.random() * 2, // Random delay
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 1 + Math.random() * 2 // Random font size multiplier
      });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup particles after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 6000);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={triggerMoneyRain}
                className="flex-shrink-0 flex items-center text-green-600 font-bold text-xl group cursor-pointer select-none transition-transform active:scale-90"
                title="Clique para ficar rico!"
              >
                <div className="relative mr-2">
                  <div className="absolute inset-0 bg-green-200 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-ping"></div>
                  <DollarSign className="h-8 w-8 relative z-10 animate-bounce group-hover:text-green-500 transition-colors" />
                </div>
                <span className="group-hover:text-green-500 transition-colors">Renda Online Fácil</span>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#products"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-green-500/50"
              >
                Começar Agora
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Money Rain Container */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="money-particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}rem`
          }}
        >
          {p.emoji}
        </div>
      ))}
    </>
  );
};