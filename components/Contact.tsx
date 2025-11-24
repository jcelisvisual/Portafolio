/**
 * COMPONENTE: Contact Section
 * Formulario de contacto funcional con validación
 * Incluye información de contacto y enlaces a CV
 */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // PLACEHOLDER: Integrar con backend o servicio de email (ej. EmailJS, Formspree, etc.)
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg font-display mb-4">Contacto</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Columna Izquierda: Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-md mb-6">Hablemos</h3>
              <p className="text-foreground/70 mb-8">
                Estoy disponible para proyectos de animación, dirección de fotografía, 
                motion graphics y consultoría audiovisual. No dudes en contactarme.
              </p>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Email</p>
                  <a href="mailto:juanfelipe.celis@example.com" className="font-medium hover:text-accent transition-colors">
                    juanfelipe.celis@example.com
                  </a>
                  <p className="text-xs text-accent/70 mt-1">PLACEHOLDER: Tu email real</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Teléfono</p>
                  <a href="tel:+573001234567" className="font-medium hover:text-accent transition-colors">
                    +57 300 123 4567
                  </a>
                  <p className="text-xs text-accent/70 mt-1">PLACEHOLDER: Tu número real</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/50 mb-1">Ubicación</p>
                  <p className="font-medium">Bucaramanga, Colombia</p>
                </div>
              </div>
            </div>

            {/* Botón Descargar CV */}
            <div className="pt-8">
              <a
                href="/cv/JuanFelipeCelis_CV.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
              <p className="text-xs text-foreground/50 mt-2">
                PLACEHOLDER: Colocar tu CV en public/cv/
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' && 'Enviando...'}
                {formStatus === 'sent' && '¡Mensaje Enviado! ✓'}
                {formStatus === 'idle' && 'Enviar Mensaje'}
                {formStatus === 'error' && 'Error. Intenta de nuevo'}
              </button>

              {/* Nota de Placeholder */}
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-xs text-foreground/70">
                  <strong>PLACEHOLDER:</strong> Integrar servicio de email (EmailJS, Formspree, Resend, etc.) 
                  o backend para procesar formularios.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
