/**
 * COMPONENTE: About Section
 * Sección "Acerca de Mí" con biografía, habilidades, valores y logros
 */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Animación 2D/3D',
    'Motion Graphics',
    'Dirección de Fotografía',
    'Diseño de Marca',
    'Edición de Video',
    'After Effects',
    'Premiere Pro',
    'Cinema 4D',
    'Illustrator',
    'Photoshop',
    'DaVinci Resolve',
    'Blender',
  ];

  const values = [
    {
      title: 'Creatividad',
      description: 'Cada proyecto es una oportunidad para innovar y explorar nuevas formas de contar historias visuales.',
    },
    {
      title: 'Excelencia Técnica',
      description: 'Dominio de herramientas y técnicas de vanguardia para entregar resultados de la más alta calidad.',
    },
    {
      title: 'Colaboración',
      description: 'Trabajo en equipo efectivo para transformar visiones en realidades audiovisuales impactantes.',
    },
  ];

  return (
    <section id="sobre-mi" ref={ref} className="section-padding bg-foreground/[0.02]">
      <div className="container-custom">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg font-display mb-4">Sobre Mí</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Conoce mi historia, mi visión creativa y lo que me impulsa como artista audiovisual
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Columna Izquierda: Biografía e Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Imagen de Perfil */}
            <div className="relative mb-8 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                alt="Juan Felipe Celis"
                className="w-full h-full object-cover"
              />
              {/* Placeholder Nota */}
              <div className="absolute bottom-4 left-4 right-4 bg-accent/90 text-white text-xs p-2 rounded">
                PLACEHOLDER: Reemplazar con foto profesional
              </div>
            </div>

            {/* Biografía */}
            <div className="space-y-4 text-foreground/70">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">Juan Felipe Celis</strong> es un artista audiovisual 
                y videógrafo egresado de la <strong className="text-foreground">Universidad Autónoma de Bucaramanga (UNAB)</strong>, 
                con más de 5 años de experiencia transformando conceptos creativos en experiencias visuales memorables.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">PLACEHOLDER:</strong> Mi pasión por el arte visual comenzó [descripción 
                del origen de tu interés]. A lo largo de mi carrera, he tenido el privilegio de trabajar con [tipos de 
                clientes/proyectos], lo que me ha permitido desarrollar un estilo único que combina [características 
                distintivas de tu trabajo].
              </p>
              <p className="leading-relaxed">
                Mi filosofía de trabajo se centra en [tu visión creativa]. Creo firmemente en [tus valores profesionales], 
                y cada proyecto es una oportunidad para superar límites creativos y técnicos.
              </p>
              <p className="leading-relaxed">
                Cuando no estoy detrás de una cámara o trabajando en animaciones, disfruto [hobbies/intereses personales 
                que humanicen tu perfil].
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Habilidades, Valores y Logros */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-10"
          >
            {/* Habilidades */}
            <div>
              <h3 className="heading-md mb-6">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                    className="px-4 py-2 bg-foreground/5 hover:bg-accent/10 border border-foreground/10 rounded-full text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Valores */}
            <div>
              <h3 className="heading-md mb-6">Valores & Personalidad</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-foreground/60">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Logros/Prensa (Placeholder) */}
            <div>
              <h3 className="heading-md mb-6">Logros & Reconocimientos</h3>
              <div className="space-y-4">
                <div className="p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                  <p className="text-sm text-foreground/70">
                    <strong className="text-foreground">PLACEHOLDER:</strong> Añadir premios, exposiciones, 
                    colaboraciones destacadas, menciones en prensa, o certificaciones relevantes.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/60">
                    <li>• Premio/Reconocimiento 1 (Año)</li>
                    <li>• Exposición/Colaboración 2 (Año)</li>
                    <li>• Mención en [Publicación] (Año)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
