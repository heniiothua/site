import { useParams } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { imoveis } from '../data/imoveis';

import { useEffect } from 'react';

function ImovelDetalhes() {
  const { id } = useParams();
  const imovel = imoveis.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!imovel) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Imóvel não encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Galeria de Imagens */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-full">
          {imovel.imagens.map((imagem, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={imagem}
                alt={`${imovel.titulo} - Imagem ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{imovel.titulo}</h1>
          <p className="text-xl text-white/90 drop-shadow-lg">{imovel.local}</p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 backdrop-blur-sm bg-white/95">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {imovel.detalhes.map((detalhe, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-300">
                    <i className={`fas fa-${detalhe.icon} text-[#FF5722] text-xl`}></i>
                    <span className="text-gray-700 font-medium">
                      {detalhe.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Descrição
                </h2>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {imovel.descricao}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/95">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Características
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imovel.extras.map((extra, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                    <i className={`fas fa-${extra.icon} text-[#FF5722] text-xl`}></i>
                    <span className="text-gray-700 font-medium">
                      {extra.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 backdrop-blur-sm bg-white/95">
              {/* Resumo do Imóvel */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF5722]/10 flex items-center justify-center">
                    <i className="fas fa-home text-[#FF5722] text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{imovel.tipo}</h3>
                    <p className="text-sm text-gray-600">{imovel.local}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Valor</span>
                    <span className="font-bold text-[#FF5722] text-lg">{imovel.preco}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium text-[#FF5722]">{imovel.status}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Localização</span>
                    <span className="font-medium text-gray-800">{imovel.local}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Tipo</span>
                    <span className="font-medium text-gray-800">{imovel.tipo}</span>
                  </div>
                </div>
              </div>

              {/* Contato do Corretor */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="./images/profile1.jpg" 
                    alt="Fernando Santos" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#FF5722]"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">Fernando Santos</h3>
                    <p className="text-sm text-gray-600">CRECI PB 13347-F</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href="https://wa.me/5583993002121" className="flex items-center justify-center gap-2 p-3 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
                    <i className="fab fa-whatsapp text-xl"></i>
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="tel:+5583993002121" className="flex items-center justify-center gap-2 p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                    <i className="fas fa-phone text-xl"></i>
                    <span className="text-sm">Ligar</span>
                  </a>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a href="https://www.instagram.com/fernandosantos.corretor_/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-pink-50 text-pink-600 rounded-xl hover:bg-pink-100 transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/fernando.pedro.33" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                    <i className="fab fa-facebook text-xl"></i>
                    <span className="text-sm">Facebook</span>
                  </a>
                </div>
                <a href="mailto:fernandopedro042@gmail.com" className="mt-3 flex items-center justify-center gap-2 p-3 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImovelDetalhes; 