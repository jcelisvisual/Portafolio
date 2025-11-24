/**
 * COMPONENTE: Portfolio/Projects Section
 * Galería curada de proyectos audiovisuales con estudios de caso
 * Incluye videos embebidos, descripciones detalladas y proceso creativo
 */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// Interface para definir estructura de proyecto
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  year: string;
  role: string;
  client?: string;
  team?: string;
  duration?: string;
  equipment?: string;
  process?: string;
}

// PLACEHOLDER: Array de proyectos - Reemplazar con información real
const projects: Project[] = [
  {
    id: 1,
    title: 'PROYECTO 1: Animación 2D para Marca Global',
    category: 'Animación 2D',
    description: 'Descripción detallada del proyecto: objetivo, desafíos, soluciones creativas implementadas y resultados obtenidos. Este proyecto buscaba crear una identidad visual única que conectara con audiencias globales.',
    videoUrl: 'https://player.vimeo.com/video/XXXXXX1',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    year: '2024',
    role: 'Director de Animación',
    client: 'Cliente Ejemplo S.A.',
    team: '5 personas',
    duration: '3 semanas',
    equipment: 'After Effects, Cinema 4D, Illustrator',
    process: 'El proceso comenzó con un análisis profundo de la marca y sus valores...',
  },
  {
    id: 2,
    title: 'PROYECTO 2: Dirección de Fotografía - Video Corporativo',
    category: 'Dirección de Fotografía',
    description: 'Video corporativo que captura la esencia y cultura de una empresa tecnológica innovadora. Se priorizó la iluminación natural y composiciones dinámicas.',
    videoUrl: 'https://player.vimeo.com/video/XXXXXX2',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800',
    year: '2024',
    role: 'Director de Fotografía',
    team: '8 personas',
    duration: '2 días de rodaje',
    equipment: 'Sony A7S III, DJI Ronin, Godox LED',
  },
  {
    id: 3,
    title: 'PROYECTO 3: Motion Graphics - Campaña Digital',
    category: 'Motion Graphics',
    description: 'Campaña de motion graphics para redes sociales que generó un aumento del 150% en engagement. Diseño moderno y dinámico.',
    videoUrl: 'https://player.vimeo.com/video/XXXXXX3',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    year: '2023',
    role: 'Motion Designer',
    client: 'Startup Tech',
    equipment: 'After Effects, Premiere Pro',
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portafolio" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg font-display mb-4">Portafolio</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una colección curada de proyectos que reflejan mi visión creativa y experiencia técnica
          </p>
        </motion.div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-foreground/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-sm text-accent font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 line-clamp-2">
                  {project.description}
                </p>
                <p className="text-xs text-foreground/40 mt-2">{project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de Proyecto (Estudio de Caso) */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-background border border-foreground/10 rounded-2xl max-w-4xl w-full p-6 md:p-10 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video */}
              <div className="relative w-full mb-6" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={selectedProject.videoUrl}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Información Detallada */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-accent font-medium mb-2">
                    {selectedProject.category}
                  </p>
                  <h3 className="heading-md mb-4">{selectedProject.title}</h3>
                  <p className="text-foreground/70">{selectedProject.description}</p>
                </div>

                {/* Detalles Técnicos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-y border-foreground/10">
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">Año</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">Rol</p>
                    <p className="font-medium">{selectedProject.role}</p>
                  </div>
                  {selectedProject.client && (
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Cliente</p>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                  )}
                  {selectedProject.team && (
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Equipo</p>
                      <p className="font-medium">{selectedProject.team}</p>
                    </div>
                  )}
                  {selectedProject.duration && (
                    <div>
                      <p className="text-xs text-foreground/50 mb-1">Duración</p>
                      <p className="font-medium">{selectedProject.duration}</p>
                    </div>
                  )}
                </div>

                {/* Proceso y Equipo */}
                {selectedProject.equipment && (
                  <div>
                    <p className="text-sm font-semibold mb-2">Herramientas y Equipo</p>
                    <p className="text-foreground/70">{selectedProject.equipment}</p>
                  </div>
                )}
                {selectedProject.process && (
                  <div>
                    <p className="text-sm font-semibold mb-2">Proceso Creativo</p>
                    <p className="text-foreground/70">{selectedProject.process}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Nota de Placeholder */}
        <div className="mt-12 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-center text-foreground/70">
            <strong>PLACEHOLDER:</strong> Reemplazar el array `projects` con información real de tus proyectos.
            Actualizar URLs de videos (XXXXXX1, XXXXXX2, etc.) con IDs reales de Vimeo/YouTube.
          </p>
        </div>
      </div>
    </section>
  );
}
