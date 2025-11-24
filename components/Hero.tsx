/**
 * COMPONENTE: Hero Section
 * Sección de inicio con título principal y presentación del artista
 * Incluye efectos parallax y animaciones de entrada
 */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="inicio"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Fondo decorativo minimalista */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Título Principal */}
          <h1 className="heading-xl font-display mb-6">
            Juan Felipe Celis
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted mb-8 max-w-3xl mx-auto">
            Artista Audiovisual & Motion Graphics
          </p>

          {/* Descripción breve */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
          >
            Transformando ideas en experiencias visuales cautivadoras. 
            Especializado en animación, dirección de fotografía y diseño de marca.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#demo-reel" className="btn-primary">
              Ver Demo Reel
            </a>
            <a href="#portafolio" className="btn-secondary">
              Explorar Portafolio
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 animate-float">
              <span className="text-xs text-muted uppercase tracking-wider">Scroll</span>
              <svg
                className="w-6 h-6 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
