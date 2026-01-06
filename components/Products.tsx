import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { BookOpen, Star, Download, Eye, X, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { Typewriter } from './Typewriter';
import { useMoneyRain } from '../MoneyRainContext';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { triggerMoneyRain } = useMoneyRain();

  const products: Product[] = [
    {
      id: 'e1',
      title: 'Guia Definitivo do Marketing Digital',
      description: 'Aprenda do zero como montar sua estrutura de vendas online. Estratégias de tráfego pago e orgânico.',
      price: 250,
      image: 'https://picsum.photos/seed/book1/600/400',
      category: 'ebook'
    },
    {
      id: 'c1',
      title: 'Mestre da Importação China-Moçambique',
      description: 'Lista de fornecedores confiáveis, logística e métodos de envio seguros para maximizar seus lucros.',
      price: 500,
      image: 'https://picsum.photos/seed/course1/600/400',
      category: 'course'
    },
    {
      id: 'e2',
      title: 'Copywriting para WhatsApp',
      description: 'Textos que vendem: scripts prontos para fechar vendas no x1. Gatilhos mentais e quebra de objeções.',
      price: 150,
      image: 'https://picsum.photos/seed/book2/600/400',
      category: 'ebook'
    }
  ];

  const productPhrases = [
    ["Mais Vendido", "Oferta Relâmpago", "Leitura Obrigatória"],
    ["Vagas Limitadas", "Alta Procura", "Certificado Incluso"],
    ["Essencial", "Venda Mais", "Scripts Prontos"]
  ];

  const handleBuy = () => {
    triggerMoneyRain(60);
    window.location.href = '#contact';
  };

  return (
    <section id="products" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Produtos Digitais" 
          subtitle="eBooks e Cursos selecionados para acelerar seus resultados." 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm uppercase tracking-wider z-10">
                  {product.category}
                </div>
                
                {/* Overlay with Quick View button on hover (desktop) or always visible (mobile approach via layout) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => {
                      triggerMoneyRain(10);
                      setSelectedProduct(product);
                    }}
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <Eye className="h-4 w-4" />
                    Espiar
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                  <div className="text-white text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span>
                    <Typewriter phrases={productPhrases[index % productPhrases.length]} delay={3000} typingSpeed={70} className="text-shadow" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2" title={product.title}>{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 h-10 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">(4.9)</span>
                </div>

                <div className="flex items-center justify-between mt-auto gap-3">
                  <span className="text-2xl font-bold text-green-700">{product.price} MT</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        triggerMoneyRain(10);
                        setSelectedProduct(product);
                      }}
                      className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors md:hidden"
                      aria-label="Ver detalhes"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={handleBuy}
                      onMouseEnter={() => triggerMoneyRain(5)}
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-gray-500 hover:text-red-500"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                {selectedProduct.category.toUpperCase()}
              </div>
            </div>

            {/* Modal Details */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h2>
              
              <div className="flex items-center mb-6 space-x-4">
                <span className="text-3xl font-bold text-green-600">{selectedProduct.price} MT</span>
                <div className="flex items-center text-sm text-gray-500 border-l pl-4 border-gray-200">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span>(128 avaliações)</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">O que você vai aprender:</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                  <br /><br />
                  Este produto foi desenvolvido especialmente para o mercado de Moçambique, considerando as plataformas de pagamento locais (M-Pesa, Emola) e a realidade do consumidor digital.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Acesso Imediato após pagamento
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Suporte via WhatsApp com Milvan
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    Garantia de qualidade
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={handleBuy}
                  onMouseEnter={() => triggerMoneyRain(10)}
                  className="flex-1 bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200 hover:scale-105 transform"
                >
                  <Download className="h-5 w-5" />
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};