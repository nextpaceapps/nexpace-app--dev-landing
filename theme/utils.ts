import { Theme } from './types';

/**
 * Helper function to get Tailwind shadow class from theme shadow value
 */
export const getShadowClass = (shadow: string): string => {
  return `shadow-[${shadow}]`;
};

/**
 * Helper function to get gradient classes from theme gradient value
 */
export const getGradientClasses = (gradient: string): string => {
  return `bg-gradient-to-r ${gradient}`;
};

/**
 * Helper function to combine multiple class strings
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Get color value as hex (for inline styles)
 */
export const getColorValue = (color: string): string => {
  // If it's already a hex or rgb value, return as is
  if (color.startsWith('#') || color.startsWith('rgb')) {
    return color;
  }
  
  // Map common Tailwind color names to hex values
  const colorMap: Record<string, string> = {
    'cyan-400': '#22d3ee',
    'cyan-500': '#06b6d4',
    'cyan-600': '#0891b2',
    'fuchsia-400': '#e879f9',
    'fuchsia-500': '#d946ef',
    'fuchsia-600': '#c026d3',
    'white': '#ffffff',
    'black': '#000000',
  };
  
  return colorMap[color] || color;
};

/**
 * Get theme-aware className for common patterns
 */
export const getThemeClasses = (theme: Theme) => {
  return {
    // Text gradients
    textGradient: `text-transparent bg-clip-text ${getGradientClasses(theme.colors.gradient.text)}`,
    textGradientPrimary: `text-transparent bg-clip-text ${getGradientClasses(theme.colors.gradient.primary)}`,
    
    // Buttons
    btnPrimary: theme.components.button.primary,
    btnSecondary: theme.components.button.secondary,
    btnGradient: theme.components.button.gradient,
    
    // Cards
    card: `${theme.components.card.base} ${theme.components.card.hover}`,
    
    // Inputs
    input: `${theme.components.input.base} ${theme.components.input.focus}`,
    
    // Badges
    badgePrimary: theme.components.badge.primary,
    badgeSecondary: theme.components.badge.secondary,
  };
};

