import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Renda Online Fácil</h3>
            <p className="text-sm leading-relaxed">
              Sua plataforma definitiva para aprender sobre marketing digital e importação em Moçambique.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#affiliates" className="hover:text-white transition-colors">Afiliados</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#tutorials" className="hover:text-white transition-colors">Tutoriais</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="cursor-pointer hover:text-white">Termos de Uso</span></li>
              <li><span className="cursor-pointer hover:text-white">Política de Privacidade</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Renda Online Fácil - Humorista Milvan. Todos os direitos reservados.</p>
          <div className="flex items-center">
            <span>Desenvolvido</span>
            <span className="mx-1 text-red-500 animate-heartbeat text-lg" title="Feito com amor">❤️</span>
            <span>por</span>
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1 text-white hover:text-green-400 font-semibold transition-colors"
            >
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};