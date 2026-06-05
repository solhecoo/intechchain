# Intechchain — Sitio web

Réplica mejorada de [intechchain.com](https://intechchain.com/), reconstruida desde WordPress
hacia un sitio estático con **Astro + Tailwind CSS**, **bilingüe (ES/EN)** y optimizado para
**SEO, rendimiento y conversión**.

## 🚀 Comandos

| Comando        | Acción                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instala dependencias                              |
| `pnpm dev`     | Dev server en `localhost:4321` (`/` ES, `/en/` EN)|
| `pnpm build`   | Compila el sitio estático a `./dist/`             |
| `pnpm preview` | Previsualiza el build                             |
| `pnpm astro check` | Chequeo de tipos                              |

## 🗂 Estructura

```
src/
  layouts/BaseLayout.astro     # <head>: SEO, OpenGraph, hreflang, JSON-LD
  components/                  # Header, Hero, Services, About, Projects,
                               # Clients, CTASection, Contact, Footer,
                               # WhatsappButton, LangSwitcher, Icon, Home
  pages/
    index.astro                # Español (raíz /)
    en/index.astro             # Inglés (/en/)
  i18n/
    es.json · en.json          # ⭐ TODO el texto vive aquí (fuente única)
    ui.ts                      # helpers t(), whatsappUrl(), datos de contacto
  content/
    services.ts metrics.ts     # datos estructurales (icono + clave i18n)
    projects.ts clients.ts     # ⚠️ VACÍOS — completar con datos reales
  styles/global.css            # tokens de marca (Tailwind v4 @theme/@utility)
public/
  favicon.svg og-image.svg robots.txt
astro.config.mjs               # site, i18n, sitemap, Tailwind
```

## ✍️ Cómo editar

- **Textos:** edita `src/i18n/es.json` y `src/i18n/en.json`. Nada de texto está
  hardcodeado en los componentes.
- **Contacto / WhatsApp:** `src/i18n/ui.ts` (número, wa.link, mensajes).
- **Colores de marca:** `src/styles/global.css` (bloque `@theme`).

## ⚠️ Datos reales pendientes (NO se inventaron)

El sitio actual no expone estos datos de forma extraíble, así que las secciones
quedan funcionando pero vacías hasta que los completes:

1. **Proyectos** → `src/content/projects.ts` (ver ejemplo dentro del archivo).
   Coloca imágenes en `public/projects/`.
2. **Clientes** → `src/content/clients.ts`. Coloca logos en `public/clients/`.
3. **Email / dirección corporativa** → añadir en `src/i18n/ui.ts` + secciones de
   contacto/footer cuando los tengas.

Mientras estén vacíos, Proyectos y Clientes muestran un texto de "próximamente"
en lugar de datos ficticios.

## 🔎 SEO incluido

Meta title/description por idioma, Open Graph + Twitter cards, `hreflang`
(es/en/x-default), JSON-LD `ProfessionalService`, `sitemap-index.xml` automático,
`robots.txt`, un único `<h1>` por página y `lang` correcto.

## ✨ Dinamismo (3D + parallax)

- **Escena 3D procedural** (Three.js) en el Hero: red de nodos "blockchain"
  generada por código, con rotación, parallax de mouse y de scroll. Vive en
  [src/components/Scene3D.astro](src/components/Scene3D.astro).
  - ⚠️ **No se usa Blender**: es geometría generada en código. El archivo deja
    documentado cómo cargar un `.glb` real exportado de Blender
    (`/public/models/escena.glb` + `GLTFLoader`) cuando lo tengas.
  - Three.js va en un chunk diferido aparte (~488 KB sin comprimir, ~125 KB gzip)
    y la animación se **pausa** cuando el canvas sale del viewport o la pestaña
    está oculta.
- **Parallax de scroll** en capas decorativas: atributo `data-parallax="<factor>"`.
- **Reveal on scroll**: atributo `data-reveal` (+ `data-reveal-delay` para stagger),
  gestionado por [src/components/Motion.astro](src/components/Motion.astro).
- Todo respeta `prefers-reduced-motion` (se desactiva el movimiento).

## 📈 Conversión

CTAs hacia WhatsApp (`wa.me/573243951987`) con mensaje prellenado por idioma,
botón flotante persistente y sección de contacto con teléfono directo.
