import React from 'react';
import { SectionTitle } from './SectionTitle';
import { BookOpen, Star, Download } from 'lucide-react';
import { Product } from '../types';
import { Typewriter } from './Typewriter';

export const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 'e1',
      title: 'Guia Definitivo do Marketing Digital',
      description: 'Aprenda do zero como montar sua estrutura de vendas online.',
      price: 250,
      image: 'https://picsum.photos/seed/book1/400/300',
      category: 'ebook'
    },
    {
      id: 'c1',
      title: 'Mestre da Importação China-Moçambique',
      description: 'Lista de fornecedores confiáveis e métodos de envio seguros.',
      price: 500,
      image: 'https://picsum.photos/seed/course1/400/300',
      category: 'course'
    },
    {
      id: 'e2',
      title: 'Copywriting para WhatsApp',
      description: 'Textos que vendem: scripts prontos para fechar vendas no x1.',
      price: 150,
      image: 'https://picsum.photos/seed/book2/400/300',
      category: 'ebook'
    }
  ];

  const productPhrases = [
    ["Mais Vendido", "Oferta Relâmpago", "Leitura Obrigatória"],
    ["Vagas Limitadas", "Alta Procura", "Certificado Incluso"],
    ["Essencial", "Venda Mais", "Scripts Prontos"]
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Produtos Digitais" 
          subtitle="eBooks e Cursos selecionados para acelerar seus resultados." 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col">
              <div className="relative h-48">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wider">
                  {product.category}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="text-white text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                    <Typewriter phrases={productPhrases[index % productPhrases.length]} delay={3000} typingSpeed={70} className="text-shadow" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-green-700">{product.price} MT</span>
                  <button 
                    onClick={() => window.location.href = '#contact'} // Redirect to contact for manual buy
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};