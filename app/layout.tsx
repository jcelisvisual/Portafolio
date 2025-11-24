import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Juan Felipe Celis | Artista Audiovisual & Motion Graphics",
  description: "Portafolio profesional de Juan Felipe Celis, artista audiovisual y videógrafo egresado de la UNAB. Especializado en animación, motion graphics y dirección de fotografía.",
  keywords: ["artista audiovisual", "motion graphics", "videografía", "animación", "dirección de fotografía", "UNAB"],
  authors: [{ name: "Juan Felipe Celis" }],
  openGraph: {
    title: "Juan Felipe Celis | Artista Audiovisual",
    description: "Portafolio profesional de Juan Felipe Celis - Artista Audiovisual & Motion Graphics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
