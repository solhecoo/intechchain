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
  /**
   * Tratamiento visual de la imagen:
   * - 'device': mockup de dispositivo flotante (object-contain) — mockups originales.
   * - 'web': captura de la app/web a sangre completa (object-cover) — logins reales.
   */
  kind?: 'device' | 'web';
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
    image: `${B}projects/niio-pay.webp`,
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
    image: `${B}projects/alerta-rosa.webp`,
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
    image: `${B}projects/alivio.webp`,
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
    image: `${B}projects/premium-academy.webp`,
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
    image: `${B}projects/tu-cop.webp`,
    accent: '#3b6fff',
    title: { es: 'Tu COP', en: 'Tu COP' },
    description: {
      es: 'Billetera digital para enviar, recibir y hacer crecer tu dinero, con intercambio de divisas.',
      en: 'Digital wallet to send, receive and grow your money, with currency exchange.',
    },
    tags: ['Fintech', 'Wallet'],
  },

  // --- Apps y plataformas web (capturas reales de cada login/landing) ---
  {
    slug: 'loanpro',
    image: `${B}projects/loanpro.webp`,
    accent: '#2f7bd6',
    kind: 'web',
    title: { es: 'LoanPro', en: 'LoanPro' },
    description: {
      es: 'Crédito por libranza con descuento directo de nómina: 100% en línea, aprobación ágil y desembolso rápido.',
      en: 'Payroll-deduction loans with direct salary discount: 100% online, fast approval and quick disbursement.',
    },
    tags: ['Fintech', 'Crédito', 'Libranza'],
    url: 'https://loanpro.com.co/',
  },
  {
    slug: 'inner-traders',
    image: `${B}projects/inner-traders.webp`,
    accent: '#5b6ef5',
    kind: 'web',
    title: { es: 'Inner Traders', en: 'Inner Traders' },
    description: {
      es: 'Journal de trading para registrar, revisar y analizar tus operaciones en un solo lugar.',
      en: 'Trading journal to log, review and analyze your operations in one place.',
    },
    tags: ['Trading', 'Journal', 'Fintech'],
    url: 'https://appinnertraders-production.up.railway.app/login',
  },
  {
    slug: 'banbu',
    image: `${B}projects/banbu.webp`,
    accent: '#4356ff',
    kind: 'web',
    title: { es: 'Banbu', en: 'Banbu' },
    description: {
      es: 'Copiloto de marketing con IA: conecta Meta, Google Ads y Pinterest y optimiza tus campañas 24/7.',
      en: 'AI marketing copilot: connect Meta, Google Ads and Pinterest and optimize your campaigns 24/7.',
    },
    tags: ['Marketing', 'IA', 'SaaS'],
    url: 'https://banbu.online/',
  },
  {
    slug: 'konectar',
    image: `${B}projects/konectar.webp`,
    accent: '#f5a623',
    kind: 'web',
    title: { es: 'Konectar Technology', en: 'Konectar Technology' },
    description: {
      es: 'Proveedor de internet de alta velocidad y televisión Full HD para Segovia y Remedios.',
      en: 'High-speed internet and Full HD television provider for Segovia and Remedios.',
    },
    tags: ['ISP', 'Telecom'],
    url: 'https://www.konectartechnology.com/',
  },
  {
    slug: 'premium-academy-web',
    image: `${B}projects/premium-academy-web.webp`,
    accent: '#22d39b',
    kind: 'web',
    title: { es: 'Premium Academy', en: 'Premium Academy' },
    description: {
      es: 'Plataforma web de la academia premium: cursos, contenido y comunidad de alto valor.',
      en: 'Web platform for the premium academy: courses, content and a high-value community.',
    },
    tags: ['EdTech', 'Cursos', 'Web'],
    url: 'https://www.premiumacademy.pro/',
  },
  {
    slug: 'urbanpass',
    image: `${B}projects/urbanpass.webp`,
    accent: '#5b8cff',
    kind: 'web',
    title: { es: 'UrbanPass', en: 'UrbanPass' },
    description: {
      es: 'Plataforma SaaS para la gestión de estacionamientos por suscripción.',
      en: 'SaaS platform for subscription-based parking management.',
    },
    tags: ['SaaS', 'Movilidad'],
    url: 'https://web-production-b4fbe.up.railway.app/auth/login',
  },
  {
    slug: 'fintrax',
    image: `${B}projects/fintrax.webp`,
    accent: '#a855f7',
    kind: 'web',
    title: { es: 'FintraX', en: 'FintraX' },
    description: {
      es: 'Plataforma financiera para conversión y movimiento de fondos con tecnología y atención humana.',
      en: 'Financial platform for fund conversion and transfers with technology and human support.',
    },
    tags: ['Fintech', 'Fondos'],
    url: 'https://app-fintrax-production.up.railway.app/',
  },
  {
    slug: 'ventureone',
    image: `${B}projects/ventureone.webp`,
    accent: '#9caf95',
    kind: 'web',
    title: { es: 'VentureOne', en: 'VentureOne' },
    description: {
      es: 'Inversión inmobiliaria en Medellín con rentabilidad medible y acceso para inversionistas.',
      en: 'Real estate investment in Medellín with measurable returns and investor access.',
    },
    tags: ['Real Estate', 'Inversión'],
    url: 'https://solhecoo.github.io/VentureOne/',
  },
  {
    slug: 'tokenbyu',
    image: `${B}projects/tokenbyu.webp`,
    accent: '#57c84a',
    kind: 'web',
    title: { es: 'TokenByU', en: 'TokenByU' },
    description: {
      es: 'Tokenización de activos reales —oro y real estate— con la seguridad y transparencia de blockchain.',
      en: 'Tokenization of real-world assets —gold and real estate— with blockchain security and transparency.',
    },
    tags: ['Blockchain', 'RWA', 'Tokenización'],
    url: 'https://www.tokenbyu.com/',
  },
  {
    slug: 'dinastia',
    image: `${B}projects/dinastia.webp`,
    accent: '#d8b878',
    kind: 'web',
    title: { es: 'Dinastia', en: 'Dinastia' },
    description: {
      es: 'Gestión 360° para sellos discográficos: contabilidad, regalías, CRM de artistas y facturación con IA.',
      en: '360° management for record labels: accounting, royalties, artist CRM and billing with AI.',
    },
    tags: ['SaaS', 'Música', 'IA'],
    url: 'https://dinastia-production.up.railway.app/login',
  },
];
