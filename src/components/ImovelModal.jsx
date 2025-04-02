import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaTimes, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImovelModal({ imovel, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.nome}. Estou interessado no imóvel: ${imovel.titulo}. Meu telefone é ${formData.telefone} e meu email é ${formData.email}. Mensagem: ${formData.mensagem}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5583993002121?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <FaTimes className="text-gray-600" />
          </button>

          <div className="h-[500px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              {imovel.imagens.map((imagem, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imagem}
                    alt={`${imovel.titulo} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {imovel.titulo}
          </h2>
          <p className="text-gray-600 mb-6 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-orange-500" />
            {imovel.local}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {imovel.detalhes.map((detalhe, index) => (
              <div
                key={index}
                className="detalhe-item bg-gray-50 p-4 rounded-lg"
              >
                <span>{detalhe.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {imovel.extras.map((extra, index) => (
              <span
                key={index}
                className="tag"
              >
                {extra.text}
              </span>
            ))}
          </div>

          <p className="preco mb-6">
            {imovel.preco}
          </p>

          <p className="text-gray-700 mb-8 whitespace-pre-line">
            {imovel.descricao}
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Interessado neste imóvel?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="form-input"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="form-input"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Imóvel de Interesse"
                value={imovel.titulo}
                className="form-input"
                readOnly
              />
            </div>
            <textarea
              name="mensagem"
              placeholder="Mensagem"
              className="form-input mb-6"
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImovelModal; 