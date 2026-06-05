/**
 * Logos de clientes (sección "Clientes").
 *
 * ⚠️ TODO (datos reales): el sitio actual muestra logos (imágenes) sin nombres
 * extraíbles. NO se inventan clientes. Completa este arreglo con los clientes
 * reales y coloca sus logos en /public/clients/. Mientras esté vacío, la
 * sección muestra el texto `clients.empty` definido en i18n.
 *
 * Ejemplo:
 *   { name: 'Cliente Real', logo: '/clients/cliente-real.svg', url: 'https://...' }
 */
export interface ClientDef {
  name: string;
  /** ruta del logo en /public/clients/ */
  logo: string;
  url?: string;
}

export const clients: ClientDef[] = [
  // TODO: agregar clientes reales aquí.
];
