import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaBed, FaBath, FaCar, FaRulerCombined, FaHome, FaTree, FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import ImovelCard from '../components/ImovelCard';
import ImovelModal from '../components/ImovelModal';
import imoveis from '../data/imoveis';

const Imoveis = () => {
  const [selectedImovel, setSelectedImovel] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImoveis, setFilteredImoveis] = useState(imoveis);
  const [selectedSection, setSelectedSection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = imoveis.filter(imovel =>
      imovel.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      imovel.local.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImoveis(filtered);
  }, [searchTerm]);

  if (!selectedSection) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/imovel-destaque.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Nossos Imóveis</h1>
              <p className="text-2xl md:text-3xl mb-12">Escolha a categoria que deseja explorar</p>
              
              {/* Opções */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
                {/* Propriedades */}
                <button
                  onClick={() => setSelectedSection('propriedades')}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <FaHome className="text-5xl mb-4 mx-auto text-white group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-3xl font-bold text-white mb-4">Imóveis Construídos</h2>
                  <p className="text-white/80 text-lg">Apartamentos, casas e flats disponíveis para você</p>
                </button>

                {/* Fazendas */}
                <button
                  onClick={() => setSelectedSection('fazendas')}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <FaTree className="text-5xl mb-4 mx-auto text-white group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-3xl font-bold text-white mb-4">Terrenos e Áreas</h2>
                  <p className="text-white/80 text-lg">Terrenos e fazendas para seu projeto</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/')} />
            <h1 className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>
              {selectedSection === 'construido' ? 'Imóveis Construídos' : 'Terrenos e Áreas'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <FaHome className="text-xl" />
            </Link>
            <Link to="/contato" className="text-gray-600 hover:text-gray-900">
              <FaEnvelope className="text-xl" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar imóveis..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImoveis
            .filter(imovel => imovel.tipo === (selectedSection === 'propriedades' ? 'construido' : 'terreno'))
            .map((imovel) => (
              <div key={imovel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={imovel.imagens[0]}
                    alt={imovel.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full">
                    {imovel.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{imovel.titulo}</h3>
                  <p className="text-gray-600 mb-4">{imovel.local}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {selectedSection === 'propriedades' ? (
                        <>
                          <div className="flex items-center">
                            <FaBed className="text-gray-500 mr-1" />
                            <span>{imovel.detalhes.find(d => d.text.includes('Quartos'))?.text}</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="text-gray-500 mr-1" />
                            <span>{imovel.detalhes.find(d => d.text.includes('Banheiros'))?.text}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCar className="text-gray-500 mr-1" />
                            <span>{imovel.detalhes.find(d => d.text.includes('Vagas'))?.text}</span>
                          </div>
                        </>
                      ) : (
                        imovel.detalhes.map((detalhe, index) => (
                          <div key={index} className="flex items-center">
                            <FaRulerCombined className="text-gray-500 mr-1" />
                            <span>{detalhe.text}</span>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="text-gray-500 mr-1" />
                      <span>{imovel.detalhes.find(d => d.text.includes('m²'))?.text}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{imovel.preco}</span>
                    <button
                      onClick={() => setSelectedImovel(imovel)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImovel && (
        <ImovelModal
          imovel={selectedImovel}
          onClose={() => setSelectedImovel(null)}
        />
      )}
    </div>
  );
};

export default Imoveis; 