function Contato() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Entre em Contato
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Informações de Contato
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-2xl text-blue-600 mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-gray-600">
                    Av. Principal, 1234<br />
                    Centro, João Pessoa - PB<br />
                    CEP: 58000-000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-phone text-2xl text-blue-600 mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <p className="text-gray-600">
                    (83) 9300-2121
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-envelope text-2xl text-blue-600 mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <p className="text-gray-600">
                    fernandopedro042@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-clock text-2xl text-blue-600 mt-1 mr-4"></i>
                <div>
                  <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/fernando.pedro.33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a
                  href="https://www.instagram.com/fernandosantos.corretor_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a
                  href="https://wa.me/5583993002121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Envie sua Mensagem
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-gray-700 mb-2">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="compra">Compra de Imóvel</option>
                  <option value="venda">Venda de Imóvel</option>
                  <option value="locacao">Locação</option>
                  <option value="avaliacao">Avaliação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Nossa Localização
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8379999999997!2d-34.8813!3d-7.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac8f1c1c0c0c0c0%3A0x0!2zN8KwMDcnMTAuOSJTIDM0wrA1Mic1Mi43Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato; 