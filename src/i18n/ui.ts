import es from './es.json';
import en from './en.json';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const dictionaries = { es, en } as const;

/** Datos de contacto centralizados (única fuente de verdad). */
export const contact = {
  whatsappNumber: '573243951987', // sin signos, formato wa.me
  phoneDisplay: '+57 324 395 1987',
  waLink: 'https://wa.link/psxkk2',
} as const;

/**
 * Devuelve el helper de traducción para un idioma.
 * Soporta claves anidadas con notación de punto: t('hero.title').
 */
export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang] ?? dictionaries[defaultLang];
  return function t(key: string): string {
    const value = key
      .split('.')
      .reduce<unknown>((acc, part) => (acc as Record<string, unknown>)?.[part], dict);
    if (typeof value !== 'string') {
      console.warn(`[i18n] Clave faltante o no-string: "${key}" (${lang})`);
      return key;
    }
    return value;
  };
}

/** Acceso al diccionario completo (para arrays/objetos como hero.rotating). */
export function getDict(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/** URL de WhatsApp con mensaje prellenado por idioma. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Prefijo de ruta para un idioma (ES en raíz, EN en /en/). */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${clean}`.replace(/\/+$/, '') || '/';
}
