function ImovelCard({ imovel, onClick }) {
  return (
    <div className="imovel-card">
      <div className="relative h-48">
        <img
          src={imovel.imagens[0]}
          alt={imovel.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-medium">
          {imovel.status}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {imovel.titulo}
        </h3>
        <p className="text-gray-600 mb-4">
          <i className="fas fa-map-marker-alt mr-2 text-orange-500"></i>
          {imovel.local}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {imovel.detalhes.map((detalhe, index) => (
            <div key={index} className="detalhe-item">
              <i className={`fas fa-${detalhe.icon} mr-2`}></i>
              <span>{detalhe.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {imovel.extras.map((extra, index) => (
            <span
              key={index}
              className="tag"
            >
              <i className={`fas fa-${extra.icon} mr-1`}></i>
              {extra.text}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="preco">{imovel.preco}</p>
          <button
            onClick={() => onClick(imovel)}
            className="btn-primary"
          >
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImovelCard; 