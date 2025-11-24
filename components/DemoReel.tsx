/**
 * COMPONENTE: Demo Reel Section
 * Sección destacada con el video Demo Reel del artista
 * Video embebido de Vimeo/YouTube con diseño responsivo
 */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function DemoReel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="demo-reel"
      ref={ref}
      className="section-padding bg-foreground/[0.02]"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg font-display mb-4">Demo Reel</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una selección de mis mejores trabajos audiovisuales en 90 segundos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Video Container - Responsivo 16:9 */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              src="https://player.vimeo.com/video/XXXXXX?title=0&byline=0&portrait=0&autoplay=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Reel - Juan Felipe Celis"
            />
          </div>

          {/* Instrucción de Placeholder */}
          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-center text-foreground/70">
              <strong>PLACEHOLDER:</strong> Reemplazar el ID &quot;XXXXXX&quot; en la URL del iframe con el ID real del video de Vimeo.
              <br />
              Formato: https://player.vimeo.com/video/[TU_VIDEO_ID]
              <br />
              Para YouTube, usar: https://www.youtube.com/embed/[TU_VIDEO_ID]
            </p>
          </div>
        </motion.div>

        {/* Estadísticas opcionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
        >
          {[
            { label: 'Proyectos', value: '50+' },
            { label: 'Años de Experiencia', value: '5+' },
            { label: 'Clientes Satisfechos', value: '30+' },
            { label: 'Premios', value: '10+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
