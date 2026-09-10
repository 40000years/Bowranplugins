export const CATEGORIES = ['All plugins', 'Gameplay', 'World generation', 'Security', 'Utilities'] as const;
export type Category = typeof CATEGORIES[number];
export const pluginCategory: Record<string, Category> = { afterdeath: 'Gameplay', evergarden: 'World generation', voidscape: 'World generation', 'advanced-combat': 'Gameplay', 'anti-freecam': 'Security', 'nightvision-toggle': 'Utilities', 'advance-magic': 'Gameplay' };
export const pluginTone: Record<string, string> = { afterdeath: 'blue', evergarden: 'green', voidscape: 'green', 'advanced-combat': 'rose', 'anti-freecam': 'amber', 'nightvision-toggle': 'mint', 'advance-magic': 'purple' };
