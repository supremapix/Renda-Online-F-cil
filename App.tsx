import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Affiliates } from './components/Affiliates';
import { Products } from './components/Products';
import { PremiumContent } from './components/PremiumContent';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiConsultant } from './components/AiConsultant';
import { Watermark } from './components/Watermark';
import { MoneyRainProvider } from './MoneyRainContext';

function App() {
  // State to simulate if the user has paid the 150 MT
  const [isPremium, setIsPremium] = useState(false);

  return (
    <MoneyRainProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 relative">
        <Watermark />
        <Navbar />
        
        <main>
          <Hero />
          <Affiliates />
          <Products />
          <PremiumContent 
            isPremium={isPremium} 
            onUnlock={() => setIsPremium(true)} 
          />
          <AiConsultant />
          <Contact />
        </main>

        <Footer />
      </div>
    </MoneyRainProvider>
  );
}

export default App;