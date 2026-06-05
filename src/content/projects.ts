/**
 * Proyectos del portafolio (sección "Proyectos con Valor").
 *
 * Datos reales extraídos del sitio original intechchain.com (mockups de las
 * apps mostradas en su sección de proyectos). Las imágenes viven en
 * /public/projects/. Las descripciones reflejan lo que se ve en cada mockup.
 */
export interface ProjectDef {
  slug: string;
  image: string;
  /** color de marca del proyecto (para el acento de la card) */
  accent: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  url?: string;
}

/** Prefijo base del sitio (soporta despliegue en subcarpeta de GitHub Pages). */
const B = import.meta.env.BASE_URL;

export const projects: ProjectDef[] = [
  {
    slug: 'niio-pay',
    image: `${B}projects/niio-pay.png`,
    accent: '#2ea8ff',
    title: { es: 'niio Pay', en: 'niio Pay' },
    description: {
      es: 'Billetera digital multimoneda (COP, USDT, USD) con recargas, envíos y conversión de divisas.',
      en: 'Multi-currency digital wallet (COP, USDT, USD) with top-ups, transfers and currency conversion.',
    },
    tags: ['Fintech', 'Wallet', 'Blockchain'],
  },
  {
    slug: 'alerta-rosa',
    image: `${B}projects/alerta-rosa.png`,
    accent: '#d6308b',
    title: { es: 'Alerta Rosa', en: 'Alerta Rosa' },
    description: {
      es: 'App de comunidad y seguridad femenina: historias, red de apoyo y servicios.',
      en: "Women's community and safety app: stories, support network and services.",
    },
    tags: ['Social', 'Comunidad', 'Mobile'],
  },
  {
    slug: 'alivio',
    image: `${B}projects/alivio.png`,
    accent: '#2f6bff',
    title: { es: 'Alivio', en: 'Alivio' },
    description: {
      es: 'Plataforma financiera con cuenta de ahorros, cuenta cripto y tarjeta multimoneda.',
      en: 'Financial platform with savings account, crypto account and a multi-currency card.',
    },
    tags: ['Fintech', 'Banca', 'Cripto'],
  },
  {
    slug: 'premium-academy',
    image: `${B}projects/premium-academy.png`,
    accent: '#22d39b',
    title: { es: 'Premium Academy', en: 'Premium Academy' },
    description: {
      es: 'Plataforma educativa con cursos, feed premium, señales en vivo y coaching.',
      en: 'Learning platform with courses, premium feed, live signals and coaching.',
    },
    tags: ['EdTech', 'Cursos', 'Mobile'],
  },
  {
    slug: 'tu-cop',
    image: `${B}projects/tu-cop.png`,
    accent: '#3b6fff',
    title: { es: 'Tu COP', en: 'Tu COP' },
    description: {
      es: 'Billetera digital para enviar, recibir y hacer crecer tu dinero, con intercambio de divisas.',
      en: 'Digital wallet to send, receive and grow your money, with currency exchange.',
    },
    tags: ['Fintech', 'Wallet'],
  },
];
