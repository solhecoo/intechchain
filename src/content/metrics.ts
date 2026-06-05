/**
 * Métricas/diferenciadores mostrados junto a "¿Quiénes somos?".
 * El texto vive en i18n (metrics.items.<key>); aquí solo el icono.
 */
export interface MetricDef {
  key: 'risk' | 'goals';
  icon: 'shield' | 'target';
}

export const metricsData: MetricDef[] = [
  { key: 'risk', icon: 'shield' },
  { key: 'goals', icon: 'target' },
];
