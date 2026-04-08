import type { Metadata } from "next";
import { Playfair_Display, Figtree } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gestoker | Gestão Inteligente para Clubes de Poker",
  description:
    "Gerencie torneios, cash game, jogadores, bar e jackpots do seu clube de poker em uma única plataforma. Experimente grátis por 15 dias.",
  keywords: [
    "gestão clube de poker",
    "software poker",
    "torneios poker",
    "cash game",
    "SaaS poker",
  ],
  openGraph: {
    title: "Gestoker | Gestão Inteligente para Clubes de Poker",
    description:
      "Plataforma completa para gestão de clubes de poker. Torneios, cash game, bar, jackpots e inteligência artificial em um só lugar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${figtree.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
