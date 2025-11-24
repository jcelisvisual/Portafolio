# Portafolio - Juan Felipe Celis

Portafolio web profesional para el artista audiovisual Juan Felipe Celis, egresado de la UNAB.

## 🎨 Características

- **Diseño Minimalista**: Espacio en blanco amplio, efecto "cubo blanco" para destacar el trabajo visual
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Alto Rendimiento**: Next.js 15 con App Router, optimización de imágenes y videos
- **Animaciones Sutiles**: Framer Motion para micro-animaciones y efectos parallax
- **SEO Optimizado**: Metadata configurada para mejor visibilidad en buscadores

## 📋 Estructura del Sitio

1. **Hero Section**: Presentación del artista con llamados a la acción
2. **Demo Reel**: Video destacado (primer punto de impacto visual)
3. **Portafolio**: Galería curada de 10-15 proyectos con estudios de caso
4. **Sobre Mí**: Biografía, habilidades técnicas, valores y logros
5. **Contacto**: Formulario funcional e información de contacto
6. **Footer**: Redes sociales y copyright

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## 📦 Tecnologías Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Scroll Observer**: React Intersection Observer
- **Fuentes**: Google Fonts (Inter, Playfair Display)

## ⚙️ Configuración de Contenido

### PLACEHOLDERS A REEMPLAZAR:

1. **Demo Reel Video**
   - Archivo: `components/DemoReel.tsx`
   - Reemplazar `XXXXXX` con tu ID de video de Vimeo o YouTube

2. **Proyectos del Portafolio**
   - Archivo: `components/Portfolio.tsx`
   - Actualizar el array `projects` con tus proyectos reales
   - Reemplazar URLs de videos e imágenes

3. **Biografía**
   - Archivo: `components/About.tsx`
   - Completar los textos marcados como PLACEHOLDER
   - Agregar foto profesional

4. **Información de Contacto**
   - Archivo: `components/Contact.tsx`
   - Actualizar email y teléfono
   - Configurar servicio de email (EmailJS, Formspree, Resend, etc.)

5. **Redes Sociales**
   - Archivo: `components/Footer.tsx`
   - Reemplazar las URLs de redes sociales

6. **CV**
   - Colocar tu CV en PDF en la carpeta `public/cv/`
   - Nombre sugerido: `JuanFelipeCelis_CV.pdf`

## 🎬 Integración de Videos

### Vimeo (Recomendado para calidad)
```
https://player.vimeo.com/video/[TU_VIDEO_ID]
```

### YouTube
```
https://www.youtube.com/embed/[TU_VIDEO_ID]
```

## 📱 Redes Sociales Configuradas

- Vimeo (Alta calidad de video)
- Instagram (Portfolio visual)
- Behance (Exposición profesional)
- LinkedIn (Networking profesional)
- YouTube (Contenido adicional)

## 🎨 Personalización de Estilos

Los colores y estilos principales se pueden modificar en:
- `app/globals.css` - Variables CSS y estilos globales
- `tailwind.config.ts` - Configuración de Tailwind CSS

## 📄 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

## 🚀 Despliegue en Vercel

1. Conectar repositorio de GitHub a Vercel
2. Configuración automática detectará Next.js
3. Deploy automático en cada push a main

```bash
# O usar CLI de Vercel
npm i -g vercel
vercel
```

## 📝 Licencia

© 2024 Juan Felipe Celis. Todos los derechos reservados.

---

**Desarrollado con Next.js 15, TypeScript y Tailwind CSS**
