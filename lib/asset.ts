// Em produção o site vive num subcaminho (/cabana-refugio-gramado no GitHub Pages).
// O next/image com images.unoptimized não prefixa o basePath sozinho, então
// fazemos isso manualmente para as imagens da pasta public.
export const basePath =
  process.env.NODE_ENV === "production" ? "/cabana-refugio-gramado" : "";

export const asset = (p: string) => `${basePath}${p}`;
