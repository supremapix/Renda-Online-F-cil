import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MoneyParticle {
  id: number;
  left: number;
  duration: number;
  delay: number;
  emoji: string;
  size: number;
}

interface MoneyRainContextType {
  triggerMoneyRain: (count?: number) => void;
}

const MoneyRainContext = createContext<MoneyRainContextType | undefined>(undefined);

export const MoneyRainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  const triggerMoneyRain = (count: number = 20) => {
    const emojis = ['💵', '💸', '💰', '💲', '🤑', '💎', '🏦'];
    const newParticles: MoneyParticle[] = [];

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: Date.now() + Math.random() + i,
        left: Math.random() * 100, // Random horizontal position
        duration: 1.5 + Math.random() * 2.5, // Faster duration
        delay: Math.random() * 0.5, // Less delay for instant gratification
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 1.5 + Math.random() * 2 // Random size
      });
    }

    setParticles(prev => [...prev, ...newParticles]);

    // Cleanup
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 5000);
  };

  return (
    <MoneyRainContext.Provider value={{ triggerMoneyRain }}>
      {children}
      {/* Global Particle Container */}
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
    </MoneyRainContext.Provider>
  );
};

export const useMoneyRain = () => {
  const context = useContext(MoneyRainContext);
  if (!context) {
    throw new Error('useMoneyRain must be used within a MoneyRainProvider');
  }
  return context;
};