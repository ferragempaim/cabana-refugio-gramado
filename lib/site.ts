export const site = {
  nome: "Cabanas Refúgio de Gramado",
  cabana: "Cabana Miragem",
  tagline: "Um refúgio imerso no vale, a 10 minutos do centro de Gramado.",
  // Todo CTA de reserva aponta pro Airbnb. Decisão de segurança.
  airbnb: "https://www.airbnb.com.br/rooms/1662629165482718816",
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
  { src: "/images/quarto-vista.png", alt: "Cama de casal com vista para a serra pela janela panorâmica", legenda: "Quarto com vista" },
  { src: "/images/interior.png", alt: "Sala aberta com jacuzzi, lareira e vista", legenda: "Sala e jacuzzi" },
  { src: "/images/jacuzzi-vista.png", alt: "Jacuzzi de frente para o vale verde", legenda: "Jacuzzi aquecida" },
  { src: "/images/cozinha.png", alt: "Cozinha completa em madeira e tijolo aparente", legenda: "Cozinha completa" },
  { src: "/images/quarto.png", alt: "Quarto em luz do dia com deck ao lado", legenda: "Descanso" },
  { src: "/images/banheiro.png", alt: "Banheiro em mármore com acabamento cuidadoso", legenda: "Banheiro" },
  { src: "/images/vista.png", alt: "Vista do vale e do morro ao amanhecer", legenda: "A vista" },
];

export const comodidades = [
  { nome: "Jacuzzi aquecida", desc: "Com vista para o vale.", img: "/images/jacuzzi-vista.png" },
  { nome: "Lareira de vidro", desc: "Para o friozinho da serra.", img: "/images/lareira-vinho.png" },
  { nome: "Vista panorâmica", desc: "Em todos os ambientes.", img: "/images/quarto-vista.png" },
  { nome: "Cozinha completa", desc: "Elogiada por quem fica.", img: "/images/cozinha.png" },
  { nome: "Pet friendly", desc: "Seu pet é bem-vindo.", img: "/images/quarto.png" },
  { nome: "Estacionamento", desc: "Gratuito no local.", img: "/images/exterior.png" },
];

export const depoimentos = [
  {
    nome: "Francieli",
    texto:
      "O lugar é lindo, impecável e ainda mais bonito do que nas fotos. A vista é espetacular, dá vontade de ficar o dia todo só admirando.",
  },
  {
    nome: "Silvia",
    texto:
      "A cabana tem uma vista linda que proporciona calma, paz e tranquilidade. Excelente para momentos românticos com total privacidade.",
  },
  {
    nome: "Enriete",
    texto:
      "Cabana maravilhosa, aconchegante, linda e de muito bom gosto. Cozinha completíssima. A lareira elegante fez toda a diferença.",
  },
  {
    nome: "Alisson",
    texto:
      "Cabana perfeita. Muito bem decorada, aconchegante e extremamente limpa. Com uma vista incrível e anfitrião muito solícito.",
  },
  {
    nome: "Ricardo",
    texto: "Lugar incrível, muito aconchegante e com privacidade.",
  },
  {
    nome: "Chaves",
    texto: "Cabana impecável, local aconchegante muito bom.",
  },
];
