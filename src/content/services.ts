/**
 * Servicios mostrados en la sección "Nuestros Servicios".
 * El texto vive en i18n (services.items.<key>); aquí solo el dato estructural
 * (clave de traducción + icono). Para añadir un servicio: agrega su entrada
 * aquí y los textos en es.json / en.json.
 */
export interface ServiceDef {
  /** clave dentro de services.items.<key> en los JSON de i18n */
  key: 'software' | 'fintech' | 'blockchain' | 'ai' | 'consulting' | 'security';
  /** nombre de icono (ver componente Icon) */
  icon: 'code' | 'bank' | 'blockchain' | 'ai' | 'compass' | 'shield';
}

export const services: ServiceDef[] = [
  { key: 'software', icon: 'code' },
  { key: 'fintech', icon: 'bank' },
  { key: 'blockchain', icon: 'blockchain' },
  { key: 'ai', icon: 'ai' },
  { key: 'consulting', icon: 'compass' },
  { key: 'security', icon: 'shield' },
];
