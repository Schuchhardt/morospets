# Moro's Pets — Peluquería Canina con Bienestar Animal

Landing page para **Moro's Pets**, una peluquería canina y servicio de paseos con enfoque en bienestar animal ubicada en Santiago, Chile.

## Tech Stack

- **Next.js 15** (App Router, SSR/SSG)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3** + `tailwindcss-animate`
- **shadcn/ui** (componentes selectos: toast, tooltip, sonner)
- **Lucide React** (iconos)
- **next/font** (Montserrat + DM Sans, optimizados)
- **next/image** (WebP/AVIF automático, lazy loading)

## SEO & AEO

El sitio está optimizado para motores de búsqueda y motores de respuestas (Google AI Overview, Bing Copilot, etc.):

- **SSR completo** — todo el contenido está en el HTML inicial (no depende de JS del cliente)
- **Metadata API** de Next.js — title, description, keywords, Open Graph, Twitter Cards, canonical, robots
- **JSON-LD structured data** — `LocalBusiness`, `Service` (7 servicios), `FAQPage` (5 Q&A), `WebSite`
- **Sitemap XML** dinámico — `/sitemap.xml`
- **Robots.txt** dinámico — `/robots.txt`
- **PWA Manifest** — `/manifest.webmanifest`
- **HTML semántico** — `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `aria-labelledby`, jerarquía de headings correcta

## Desarrollo

Requisito: Node.js 18+ y npm.

```sh
# Instalar dependencias
npm install

# Servidor de desarrollo (Turbopack)
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start

# Tests unitarios
npm test

# Tests E2E (Playwright)
npx playwright test
```

## Estructura del proyecto

```
app/
  layout.tsx           # Layout raíz (metadata, fonts, providers)
  page.tsx             # Home con JSON-LD structured data
  not-found.tsx        # Página 404
  globals.css          # Estilos globales + CSS animations
  sitemap.ts           # Genera /sitemap.xml
  robots.ts            # Genera /robots.txt
  manifest.ts          # PWA manifest
src/
  components/
    AnimateOnScroll.tsx # Animaciones scroll (IntersectionObserver + CSS)
    Header.tsx          # Navegación con menú móvil
    Hero.tsx            # Sección hero
    About.tsx           # Sobre nosotros
    Services.tsx        # Servicios (peluquería + paseos)
    Philosophy.tsx      # Filosofía de bienestar
    Booking.tsx         # Cómo agendar
    Contact.tsx         # Información de contacto
    Instagram.tsx       # CTA de Instagram
    Footer.tsx          # Pie de página
    WhatsAppFloat.tsx   # Botón flotante de WhatsApp
    ui/                 # Componentes shadcn/ui (toast, tooltip, sonner)
  hooks/                # Custom hooks (useIsMobile, useToast)
  lib/                  # Utilidades (cn)
public/
  images/               # Imágenes estáticas (hero-dog, paseos-dog, moros-icon)
```
