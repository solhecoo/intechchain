/**
 * Logos de clientes (sección "Clientes").
 *
 * Logos reales descargados del sitio de cada cliente (o extraídos de su login
 * cuando el logo se renderiza por JS). Viven en /public/clients/. Se muestran
 * en blanco monocromático sobre la franja oscura (ver Clients.astro).
 */
export interface ClientDef {
  name: string;
  /** ruta del logo en /public/clients/ */
  logo: string;
  url?: string;
}

/** Prefijo base del sitio (soporta despliegue en subcarpeta de GitHub Pages). */
const B = import.meta.env.BASE_URL;

export const clients: ClientDef[] = [
  { name: 'LoanPro', logo: `${B}clients/loanpro.png`, url: 'https://loanpro.com.co/' },
  { name: 'Inner Traders', logo: `${B}clients/innertraders.png`, url: 'https://appinnertraders-production.up.railway.app/login' },
  { name: 'Banbu', logo: `${B}clients/banbu.svg`, url: 'https://banbu.online/' },
  { name: 'Konectar Technology', logo: `${B}clients/konectar.svg`, url: 'https://www.konectartechnology.com/' },
  { name: 'Premium Academy', logo: `${B}clients/premium.png`, url: 'https://www.premiumacademy.pro/' },
  { name: 'UrbanPass', logo: `${B}clients/urbanpass.svg`, url: 'https://web-production-b4fbe.up.railway.app/auth/login' },
  { name: 'FintraX', logo: `${B}clients/fintrax.png`, url: 'https://app-fintrax-production.up.railway.app/' },
  { name: 'VentureOne', logo: `${B}clients/ventureone.png`, url: 'https://solhecoo.github.io/VentureOne/' },
  { name: 'TokenByU', logo: `${B}clients/tokenbyu.svg`, url: 'https://www.tokenbyu.com/' },
  { name: 'Dinastia', logo: `${B}clients/dinastia.svg`, url: 'https://dinastia-production.up.railway.app/' },
];
