import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  // TODO: trocar pelo domínio real quando o Luccas confirmar
  metadataBase: new URL("https://cabanarefugiodegramado.com.br"),
  title: "Cabana Miragem — Cabana romântica com jacuzzi e vista em Gramado",
  description:
    "Refúgio imerso no vale, a 10 minutos do centro de Gramado. Jacuzzi aquecida, lareira e vista panorâmica em todos os ambientes. Nota 5,0 no Airbnb, Preferido dos hóspedes.",
  openGraph: {
    title: "Cabana Miragem — Refúgio romântico em Gramado",
    description:
      "Jacuzzi aquecida, lareira e vista para o vale. A 10 minutos do centro de Gramado.",
    images: ["/images/exterior.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="grao bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
