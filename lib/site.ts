export const site = {
  nome: "Cabanas Refúgio de Gramado",
  cabana: "Cabana Miragem",
  tagline: "Um refúgio imerso no vale, a 10 minutos do centro de Gramado.",
  // Todo CTA de reserva aponta pro Airbnb. Decisão de segurança.
  airbnb: "https://www.airbnb.com.br/rooms/1662629165482718816",
  airbnbAvaliacoes:
    "https://www.airbnb.com.br/rooms/1662629165482718816/reviews?source_impression_id=p3_1790187746_P37GP7-JFgaWkN6g&review_page_entrypoint=show_all",
  instagram: "https://www.instagram.com/cabanas_refugio_de_gramado/",
  // WhatsApp fica só como canal de dúvida, discreto no rodapé.
  whatsapp: "5551982920072",
  whatsappExibicao: "(51) 98292-0072",
  cidade: "Gramado, Rio Grande do Sul",

  avaliacao: {
    nota: "5,0",
    total: 10,
    selo: "Preferido dos hóspedes",
    superhost: "Washington Furquim",
  },

  ficha: {
    hospedes: 4,
    quartos: 1,
    camas: 2,
    banheiros: 1,
  },
};

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const galeria = [
  { src: "/images/exterior.png", alt: "Cabana de madeira sobre o vale ao entardecer", legenda: "A cabana" },
  { src: "/images/quarto-vista.jpg", alt: "Quarto da Cabana Miragem com vista para a serra pela janela panorâmica", legenda: "Quarto com vista" },
  { src: "/images/sala-lareira.jpg", alt: "Sala da Cabana Miragem com lareira, sofá e acabamento em madeira", legenda: "Sala com lareira" },
  { src: "/images/jacuzzi-vista.jpg", alt: "Jacuzzi aquecida com vista para o vale verde", legenda: "Jacuzzi aquecida" },
  { src: "/images/cozinha.png", alt: "Cozinha completa em madeira e tijolo aparente", legenda: "Cozinha completa" },
  { src: "/images/quarto.png", alt: "Quarto em luz do dia com deck ao lado", legenda: "Descanso" },
  { src: "/images/banheiro-novo.jpg", alt: "Banheiro da Cabana Miragem com bancada de madeira e cuba iluminada", legenda: "Banheiro", zoom: 1.35 },
  { src: "/images/vista-deck.jpg", alt: "Vista do vale a partir do deck da Cabana Miragem", legenda: "A vista" },
];

export const comodidades = [
  { nome: "Jacuzzi aquecida", desc: "Com vista para o vale.", img: "/images/jacuzzi-vista.jpg" },
  { nome: "Lareira de vidro", desc: "Para o friozinho da serra.", img: "/images/lareira.jpg" },
  { nome: "Vista panorâmica", desc: "Em todos os ambientes.", img: "/images/quarto-vista.jpg" },
  { nome: "Cozinha completa", desc: "Elogiada por quem fica.", img: "/images/cozinha-completa.jpg" },
  { nome: "Pet friendly", desc: "Seu pet é bem-vindo.", img: "/images/pet-friendly.jpg" },
  { nome: "Estacionamento", desc: "Gratuito no local.", img: "/images/exterior.png" },
];

export const depoimentos = [
  {
    nome: "Francieli",
    avatar: "/images/francieli.avif",
    texto:
      "O lugar é lindo, impecável e ainda mais bonito do que nas fotos. A vista é espetacular, dá vontade de ficar o dia todo só admirando.",
  },
  {
    nome: "Silvia",
    avatar: "/images/silvia.avif",
    texto:
      "A cabana tem uma vista linda que proporciona calma, paz e tranquilidade. Excelente para momentos românticos com total privacidade.",
  },
  {
    nome: "Enriete",
    avatar: "/images/enriete.avif",
    texto:
      "Cabana maravilhosa, aconchegante, linda e de muito bom gosto. Cozinha completíssima. A lareira elegante fez toda a diferença.",
  },
  {
    nome: "Alisson",
    avatar: "/images/alisson.avif",
    texto:
      "Cabana perfeita. Muito bem decorada, aconchegante e extremamente limpa. Com uma vista incrível e anfitrião muito solícito.",
  },
  {
    nome: "Ricardo",
    avatar: "/images/ricardo.avif",
    texto: "Lugar incrível, muito aconchegante e com privacidade.",
  },
  {
    nome: "Chaves",
    avatar: "/images/chaves.avif",
    texto: "Cabana impecável, local aconchegante muito bom.",
  },
];
