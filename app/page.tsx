/**
 * PÁGINA PRINCIPAL: Portafolio de Juan Felipe Celis
 * Portafolio web de una sola página (scroll vertical) con diseño minimalista
 * Secciones: Header, Hero, Demo Reel, Portfolio, About, Contact, Footer
 */

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DemoReel from '@/components/DemoReel';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SECCIÓN: Header/Navigation */}
      <Header />

      {/* SECCIÓN: Hero/Inicio */}
      <Hero />

      {/* SECCIÓN: Demo Reel (Alto Impacto - Primera Impresión) */}
      <DemoReel />

      {/* SECCIÓN: Portafolio/Proyectos (Galería Curada) */}
      <Portfolio />

      {/* SECCIÓN: Acerca de Mí (Biografía, Habilidades, Valores) */}
      <About />

      {/* SECCIÓN: Contacto (Formulario + Info de Contacto) */}
      <Contact />

      {/* SECCIÓN: Footer (Redes Sociales + Copyright) */}
      <Footer />
    </main>
  );
}
