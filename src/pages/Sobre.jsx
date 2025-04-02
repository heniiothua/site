function Sobre() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Sobre Nós
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/sobre.jpg"
              alt="Sobre Nós"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Nossa História
            </h2>
            <p className="text-gray-600 mb-6">
              Com mais de 10 anos de experiência no mercado imobiliário, nos dedicamos a ajudar nossos clientes a encontrar o imóvel perfeito. Nossa trajetória é marcada por compromisso, transparência e excelência no atendimento.
            </p>
            <p className="text-gray-600 mb-6">
              Atuamos em João Pessoa e região, oferecendo um portfólio diversificado de imóveis residenciais, comerciais e rurais. Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a satisfação dos nossos clientes.
            </p>
            <p className="text-gray-600">
              Nossa missão é proporcionar uma experiência única e satisfatória na busca pelo imóvel ideal, oferecendo suporte completo em todas as etapas do processo.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-handshake text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Transparência</h3>
              <p className="text-gray-600">
                Compromisso com a verdade e clareza em todas as negociações.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-star text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Excelência</h3>
              <p className="text-gray-600">
                Busca constante pela qualidade e satisfação dos clientes.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <i className="fas fa-heart text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Compromisso</h3>
              <p className="text-gray-600">
                Dedicação total ao sucesso e satisfação dos nossos clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Nossa Equipe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/team1.jpg"
                alt="Fernando Santos"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Fernando Santos</h3>
              <p className="text-gray-600">Corretor de Imóveis</p>
            </div>

            <div className="text-center">
              <img
                src="/images/team2.jpg"
                alt="Maria Silva"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Maria Silva</h3>
              <p className="text-gray-600">Assistente Administrativo</p>
            </div>

            <div className="text-center">
              <img
                src="/images/team3.jpg"
                alt="João Oliveira"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">João Oliveira</h3>
              <p className="text-gray-600">Corretor de Imóveis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre; 