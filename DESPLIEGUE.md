# 🚀 Guía de Despliegue - Portafolio Juan Felipe Celis

## ✅ Estado Actual

El proyecto está completamente desarrollado y el repositorio Git está inicializado localmente. Solo falta:
1. Autenticación con GitHub para subir el código
2. Conectar con Vercel y desplegar

---

## 📤 PASO 1: Subir a GitHub

### Opción A: Usando GitHub CLI (Recomendado)

```bash
# Instalar GitHub CLI si no lo tienes
# https://cli.github.com/

# Autenticarte
gh auth login

# Crear el repositorio y hacer push
gh repo create jcelisvisual/Portafolio --public --source=. --remote=origin --push
```

### Opción B: Usando Personal Access Token

1. Ve a GitHub: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Selecciona los permisos: `repo`, `workflow`
4. Copia el token generado

Luego ejecuta:

```bash
# Remover el remote actual
git remote remove origin

# Agregar con token (reemplaza YOUR_TOKEN)
git remote add origin https://YOUR_TOKEN@github.com/jcelisvisual/Portafolio.git

# Push
git push -u origin main
```

### Opción C: Usando SSH

```bash
# Configurar SSH en GitHub primero
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh

# Cambiar a SSH
git remote remove origin
git remote add origin git@github.com:jcelisvisual/Portafolio.git
git push -u origin main
```

### Opción D: Usar GitHub Desktop

1. Descarga GitHub Desktop: https://desktop.github.com/
2. Abre la aplicación y haz login
3. File → Add Local Repository
4. Selecciona la carpeta: `d:\Webs React\Jcelisvisual`
5. Click en "Publish repository"

---

## 🚀 PASO 2: Desplegar en Vercel

### Método 1: Desde el Dashboard de Vercel (Más Fácil)

1. Ve a https://vercel.com/
2. Haz login con tu cuenta de GitHub
3. Click en "Add New" → "Project"
4. Importa el repositorio `jcelisvisual/Portafolio`
5. Vercel detectará automáticamente Next.js
6. Click en "Deploy" (configuración por defecto está bien)
7. ¡Listo! Tu sitio estará en: `https://portafolio-[random].vercel.app`

### Método 2: Usando Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Navegar al proyecto
cd "d:\Webs React\Jcelisvisual"

# Login en Vercel
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configuración Recomendada en Vercel:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)
- **Node Version**: 18.x o superior

---

## 🌐 PASO 3: Configurar Dominio Personalizado (Opcional)

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

---

## 📝 Checklist Post-Despliegue

Después del despliegue, asegúrate de:

- [ ] Verificar que todas las secciones se vean correctamente
- [ ] Probar el sitio en móvil, tablet y desktop
- [ ] Verificar que el formulario de contacto funcione
- [ ] Actualizar PLACEHOLDERS con contenido real:
  - [ ] Demo Reel video ID
  - [ ] Proyectos del portafolio
  - [ ] Información de contacto (email, teléfono)
  - [ ] URLs de redes sociales
  - [ ] Foto de perfil
  - [ ] Biografía completa
  - [ ] CV en PDF
- [ ] Configurar servicio de email para el formulario (EmailJS, Formspree, etc.)
- [ ] Configurar Google Analytics (opcional)

---

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de prueba
npm run build
npm run start

# Ver errores de lint
npm run lint

# Actualizar después de cambios
git add .
git commit -m "Descripción de cambios"
git push

# Vercel desplegará automáticamente después del push
```

---

## 🎨 Personalización de Contenido

### Videos (Vimeo/YouTube)

**Vimeo** (recomendado para calidad):
```
https://player.vimeo.com/video/[TU_VIDEO_ID]
```

**YouTube**:
```
https://www.youtube.com/embed/[TU_VIDEO_ID]
```

### Estructura de Archivos a Personalizar:

```
components/
  ├── DemoReel.tsx      → Actualizar video ID
  ├── Portfolio.tsx     → Array de proyectos
  ├── About.tsx         → Biografía y foto
  ├── Contact.tsx       → Email y teléfono
  └── Footer.tsx        → URLs de redes sociales

public/
  └── cv/
      └── JuanFelipeCelis_CV.pdf  → Tu CV
```

---

## 🆘 Solución de Problemas

### Error 403 al hacer push
- Verificar autenticación con GitHub
- Usar token de acceso personal
- Configurar GitHub CLI

### Build falla en Vercel
- Verificar que `package.json` tenga todas las dependencias
- Revisar logs de build en Vercel
- Asegurarse de que no haya errores de TypeScript

### Sitio no carga correctamente
- Verificar que todos los imports estén correctos
- Revisar la consola del navegador
- Verificar que las rutas de imágenes/videos sean correctas

---

## 📞 URLs Importantes

- **Repositorio**: https://github.com/jcelisvisual/Portafolio
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Tokens**: https://github.com/settings/tokens
- **GitHub CLI**: https://cli.github.com/

---

## 🎉 ¡Todo Listo!

Tu portafolio está desarrollado con:
- ✅ Next.js 15 + TypeScript
- ✅ Diseño minimalista y responsivo
- ✅ Animaciones con Framer Motion
- ✅ SEO optimizado
- ✅ Preparado para despliegue

Solo completa los pasos de autenticación y despliegue. ¡Éxito! 🚀
