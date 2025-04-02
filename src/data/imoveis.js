const imoveis = [
  {
    id: 'apartamento-luxo',
    tipo: 'construido',
    titulo: 'Apartamento de Luxo',
    local: 'Bairro dos Estados, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '3 Quartos' },
      { text: '2 Banheiros' },
      { text: '2 Vagas' },
      { text: '120m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Academia' },
      { text: 'Vaga Coberta' },
      { text: 'Elevador' }
    ],
    preco: 'R$ 650.000',
    descricao: `Apartamento luxuoso com acabamento de alto padrão, localizado em uma das áreas mais nobres de João Pessoa. O imóvel possui:

• 3 quartos sendo 1 suíte master com closet
• 2 banheiros sociais
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 2 vagas de garagem cobertas
• Piscina
• Academia
• Elevador
• Portaria 24h
• Segurança

O condomínio oferece diversas áreas de lazer e comodidades para seus moradores. Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade1.jpg',
      '/images/propriedade1-2.jpg',
      '/images/propriedade1-3.jpg'
    ]
  },
  {
    id: 'casa-moderna',
    tipo: 'construido',
    titulo: 'Casa Moderna',
    local: 'Manaíra, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '4 Quartos' },
      { text: '3 Banheiros' },
      { text: '2 Vagas' },
      { text: '180m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Jardim' },
      { text: 'Vaga Coberta' }
    ],
    preco: 'R$ 850.000',
    descricao: `Casa moderna com projeto arquitetônico contemporâneo, localizada em uma das áreas mais valorizadas de João Pessoa. O imóvel possui:

• 4 quartos sendo 2 suítes
• 3 banheiros sociais
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 2 vagas de garagem cobertas
• Piscina
• Jardim
• Área de lazer

Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade2.jpg',
      '/images/propriedade2-2.jpg',
      '/images/propriedade2-3.jpg'
    ]
  },
  {
    id: 'cobertura-duplex',
    tipo: 'construido',
    titulo: 'Cobertura Duplex',
    local: 'Bancários, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '4 Quartos' },
      { text: '3 Banheiros' },
      { text: '2 Vagas' },
      { text: '250m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Academia' },
      { text: 'Vaga Coberta' },
      { text: 'Elevador' },
      { text: 'Terraço' }
    ],
    preco: 'R$ 1.200.000',
    descricao: `Cobertura duplex de alto padrão com vista panorâmica, localizada em uma das áreas mais nobres de João Pessoa. O imóvel possui:

• 4 quartos sendo 2 suítes master com closet
• 3 banheiros sociais
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 2 vagas de garagem cobertas
• Piscina
• Academia
• Elevador
• Terraço com área de lazer
• Portaria 24h
• Segurança

O condomínio oferece diversas áreas de lazer e comodidades para seus moradores. Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade3.jpg',
      '/images/propriedade3-2.jpg',
      '/images/propriedade3-3.jpg'
    ]
  },
  {
    id: 'apartamento-alto-padrao',
    tipo: 'construido',
    titulo: 'Apartamento Alto Padrão',
    local: 'Cristo Redentor, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '3 Quartos' },
      { text: '2 Banheiros' },
      { text: '2 Vagas' },
      { text: '140m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Academia' },
      { text: 'Vaga Coberta' },
      { text: 'Elevador' }
    ],
    preco: 'R$ 750.000',
    descricao: `Apartamento de alto padrão com acabamento luxuoso, localizado em uma das áreas mais valorizadas de João Pessoa. O imóvel possui:

• 3 quartos sendo 1 suíte master com closet
• 2 banheiros sociais
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 2 vagas de garagem cobertas
• Piscina
• Academia
• Elevador
• Portaria 24h
• Segurança

O condomínio oferece diversas áreas de lazer e comodidades para seus moradores. Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade4.jpg',
      '/images/propriedade4-2.jpg',
      '/images/propriedade4-3.jpg'
    ]
  },
  {
    id: 'casa-moderna-2',
    tipo: 'construido',
    titulo: 'Casa Moderna',
    local: 'Jardim Oceania, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '4 Quartos' },
      { text: '3 Banheiros' },
      { text: '2 Vagas' },
      { text: '220m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Jardim' },
      { text: 'Área de Lazer' },
      { text: 'Vaga Coberta' }
    ],
    preco: 'R$ 920.000',
    descricao: `Casa moderna com projeto arquitetônico contemporâneo, localizada em uma das áreas mais valorizadas de João Pessoa. O imóvel possui:

• 4 quartos sendo 2 suítes
• 3 banheiros sociais
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 2 vagas de garagem cobertas
• Piscina
• Jardim
• Área de lazer

Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade5.jpg',
      '/images/propriedade5-2.jpg',
      '/images/propriedade5-3.jpg'
    ]
  },
  {
    id: 'flat',
    tipo: 'construido',
    titulo: 'Flat',
    local: 'Altiplano, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: '2 Quartos' },
      { text: '1 Banheiro' },
      { text: '1 Vaga' },
      { text: '80m²' }
    ],
    extras: [
      { text: 'Piscina' },
      { text: 'Academia' },
      { text: 'Vaga Coberta' },
      { text: 'Elevador' }
    ],
    preco: 'R$ 450.000',
    descricao: `Flat moderno e funcional, ideal para solteiros ou casais. O imóvel possui:

• 2 quartos
• 1 banheiro social
• Sala de estar e jantar integradas
• Cozinha planejada
• Área de serviço
• 1 vaga de garagem coberta
• Piscina
• Academia
• Elevador
• Portaria 24h
• Segurança

O condomínio oferece diversas áreas de lazer e comodidades para seus moradores. Localização privilegiada próxima a shopping centers, restaurantes e escolas.`,
    imagens: [
      '/images/propriedade6.jpg',
      '/images/propriedade6-2.jpg',
      '/images/propriedade6-3.jpg'
    ]
  },
  {
    id: 'fazenda-produtiva',
    tipo: 'terreno',
    titulo: 'Fazenda Produtiva',
    local: 'Zona Rural, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: 'Área Total: 50 hectares' },
      { text: 'Casa Sede' },
      { text: 'Poço Artesiano' },
      { text: 'Estrutura Completa' }
    ],
    extras: [
      { text: 'Água' },
      { text: 'Energia' },
      { text: 'Estrada' },
      { text: 'Cerca' }
    ],
    preco: 'R$ 2.500.000',
    descricao: `Fazenda produtiva localizada em área rural de João Pessoa. Características:

• Área total de 50 hectares
• Casa sede com 4 quartos
• Poço artesiano
• Estrutura para criação de gado
• Energia elétrica
• Estrada de acesso
• Cerca em todo perímetro

Ideal para investimento em agropecuária ou lazer.`,
    imagens: [
      '/images/fazenda-produtiva.jpg',
      '/images/fazenda1.jpg',
      '/images/fazenda2.jpg'
    ]
  },
  {
    id: 'terreno-urbano',
    tipo: 'terreno',
    titulo: 'Terreno Urbano',
    local: 'Bessa, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: 'Área Total: 500m²' },
      { text: 'Frente: 15m' },
      { text: 'Lateral: 33m' },
      { text: 'Topografia: Plana' }
    ],
    extras: [
      { text: 'Água' },
      { text: 'Esgoto' },
      { text: 'Energia' },
      { text: 'Asfalto' }
    ],
    preco: 'R$ 350.000',
    descricao: `Terreno urbano localizado em uma das áreas mais valorizadas de João Pessoa. Características:

• Área total de 500m²
• Frente de 15m
• Lateral de 33m
• Topografia plana
• Água, esgoto e energia disponíveis
• Rua asfaltada
• Localização privilegiada próxima a shopping centers, restaurantes e escolas

Ideal para construção de residência ou empreendimento comercial.`,
    imagens: [
      '/images/terreno1.jpg',
      '/images/terreno1-2.jpg',
      '/images/terreno1-3.jpg'
    ]
  },
  {
    id: 'fazenda-cacau',
    tipo: 'terreno',
    titulo: 'Fazenda de Cacau',
    local: 'Zona Rural, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: 'Área Total: 30 hectares' },
      { text: 'Casa Sede' },
      { text: 'Poço Artesiano' },
      { text: 'Cacau Plantado' }
    ],
    extras: [
      { text: 'Água' },
      { text: 'Energia' },
      { text: 'Estrada' },
      { text: 'Cerca' }
    ],
    preco: 'R$ 1.800.000',
    descricao: `Fazenda especializada em cultivo de cacau, localizada em área rural de João Pessoa. Características:

• Área total de 30 hectares
• Casa sede com 3 quartos
• Poço artesiano
• Cacau já plantado e em produção
• Energia elétrica
• Estrada de acesso
• Cerca em todo perímetro

Ideal para investimento em agricultura ou lazer.`,
    imagens: [
      '/images/fazenda-produtiva.jpg',
      '/images/fazenda1.jpg',
      '/images/fazenda2.jpg'
    ]
  },
  {
    id: 'terreno-comercial',
    tipo: 'terreno',
    titulo: 'Terreno Comercial',
    local: 'Mangabeira, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: 'Área Total: 800m²' },
      { text: 'Frente: 20m' },
      { text: 'Lateral: 40m' },
      { text: 'Topografia: Plana' }
    ],
    extras: [
      { text: 'Água' },
      { text: 'Esgoto' },
      { text: 'Energia' },
      { text: 'Asfalto' }
    ],
    preco: 'R$ 480.000',
    descricao: `Terreno comercial localizado em área de grande desenvolvimento em João Pessoa. Características:

• Área total de 800m²
• Frente de 20m
• Lateral de 40m
• Topografia plana
• Água, esgoto e energia disponíveis
• Rua asfaltada
• Localização privilegiada próxima a shopping centers e áreas comerciais

Ideal para construção de empreendimento comercial.`,
    imagens: [
      '/images/terreno1.jpg',
      '/images/terreno1-2.jpg',
      '/images/terreno1-3.jpg'
    ]
  },
  {
    id: 'fazenda-gado',
    tipo: 'terreno',
    titulo: 'Fazenda de Gado',
    local: 'Zona Rural, João Pessoa',
    status: 'Disponível',
    detalhes: [
      { text: 'Área Total: 100 hectares' },
      { text: 'Casa Sede' },
      { text: 'Poço Artesiano' },
      { text: 'Estrutura para Gado' }
    ],
    extras: [
      { text: 'Água' },
      { text: 'Energia' },
      { text: 'Estrada' },
      { text: 'Cerca' }
    ],
    preco: 'R$ 4.500.000',
    descricao: `Fazenda especializada em criação de gado, localizada em área rural de João Pessoa. Características:

• Área total de 100 hectares
• Casa sede com 5 quartos
• Poço artesiano
• Estrutura completa para criação de gado
• Energia elétrica
• Estrada de acesso
• Cerca em todo perímetro

Ideal para investimento em pecuária ou lazer.`,
    imagens: [
      '/images/fazenda-produtiva.jpg',
      '/images/fazenda1.jpg',
      '/images/fazenda2.jpg'
    ]
  }
];

export default imoveis; 