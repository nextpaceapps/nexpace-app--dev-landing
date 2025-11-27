export { neonicTheme } from './neonic';
export type { Theme, ThemeColors, ThemeShadows, ThemeComponentStyles } from './types';
export * from './utils';

// Import neonicTheme for default export
import { neonicTheme } from './neonic';

// Default theme export
export const defaultTheme = neonicTheme;

// Theme registry for easy switching
export const themes = {
  neonic: neonicTheme,
} as const;

export type ThemeName = keyof typeof themes;

// Export ThemeContext after themes are defined to avoid circular dependency
export { ThemeProvider, useTheme } from './ThemeContext';
