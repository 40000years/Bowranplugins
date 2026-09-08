export const CATEGORIES = ['All plugins', 'Gameplay', 'World generation', 'Security', 'Utilities'] as const;
export type Category = typeof CATEGORIES[number];
export const pluginCategory: Record<string, Category> = { afterdeath: 'Gameplay', voidscape: 'World generation', 'advanced-combat': 'Gameplay', 'anti-freecam': 'Security', 'nightvision-toggle': 'Utilities' };
export const pluginTone: Record<string, string> = { afterdeath: 'blue', voidscape: 'green', 'advanced-combat': 'rose', 'anti-freecam': 'amber', 'nightvision-toggle': 'mint' };
