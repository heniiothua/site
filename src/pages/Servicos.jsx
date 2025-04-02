function Servicos() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nossos Serviços
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Compra e Venda */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-exchange-alt text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Compra e Venda</h2>
            <p className="text-gray-600">
              Auxiliamos você em todo o processo de compra e venda de imóveis, desde a avaliação até a finalização do negócio.
            </p>
          </div>

          {/* Locação */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-key text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Locação</h2>
            <p className="text-gray-600">
              Oferecemos serviços completos de locação, incluindo gestão de contratos e manutenção do imóvel.
            </p>
          </div>

          {/* Avaliação */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-calculator text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Avaliação</h2>
            <p className="text-gray-600">
              Realizamos avaliações precisas de imóveis, considerando todos os aspectos do mercado.
            </p>
          </div>

          {/* Consultoria */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-comments text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Consultoria</h2>
            <p className="text-gray-600">
              Oferecemos consultoria especializada para investimentos imobiliários e gestão de patrimônio.
            </p>
          </div>

          {/* Gestão de Imóveis */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-building text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Gestão de Imóveis</h2>
            <p className="text-gray-600">
              Gerenciamento completo de imóveis, incluindo manutenção, documentação e relacionamento com inquilinos.
            </p>
          </div>

          {/* Financiamento */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <i className="fas fa-hand-holding-usd text-4xl text-blue-600 mb-4"></i>
            <h2 className="text-xl font-semibold mb-4">Financiamento</h2>
            <p className="text-gray-600">
              Apoio na obtenção de financiamento imobiliário, com parcerias com os principais bancos.
            </p>
          </div>
        </div>

        {/* Processo de Trabalho */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Como Trabalhamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Contato Inicial</h3>
              <p className="text-gray-600">
                Entendemos suas necessidades e expectativas
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Avaliamos as melhores opções para você
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Apresentação</h3>
              <p className="text-gray-600">
                Mostramos as opções que atendem suas necessidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Fechamento</h3>
              <p className="text-gray-600">
                Acompanhamos todo o processo até a conclusão
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-600 mb-8">
            Entre em contato conosco e descubra como podemos ajudar você.
          </p>
          <a
            href="/contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
}

export default Servicos; 