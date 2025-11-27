# Theme System

This folder contains centralized theme definitions for the application. The theme system allows you to easily switch between different visual themes and maintain consistent styling across components.

## Structure

- `types.ts` - TypeScript interfaces for theme definitions
- `neonic.ts` - Neonic (neon-themed) theme definition
- `ThemeContext.tsx` - React context provider for theme management
- `utils.ts` - Utility functions for working with themes
- `index.ts` - Main export file

## Usage

### Basic Usage

```tsx
import { useTheme } from './theme';

const MyComponent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={theme.components.card.base}>
      <h1 className={theme.colors.text.primary}>Hello</h1>
    </div>
  );
};
```

### With ThemeProvider

Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from './theme';

function App() {
  return (
    <ThemeProvider initialTheme="neonic">
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### Switching Themes

```tsx
import { useTheme } from './theme';

const ThemeSwitcher = () => {
  const { themeName, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme('neonic')}>
      Current: {themeName}
    </button>
  );
};
```

### Using Theme Utilities

```tsx
import { getThemeClasses, getShadowClass, getGradientClasses } from './theme';
import { useTheme } from './theme';

const MyComponent = () => {
  const { theme } = useTheme();
  const themeClasses = getThemeClasses(theme);
  
  return (
    <button className={themeClasses.btnGradient}>
      Click me
    </button>
  );
};
```

## Adding a New Theme

1. Create a new theme file (e.g., `theme/dark.ts`)
2. Import and define your theme following the `Theme` interface
3. Add it to the `themes` registry in `index.ts`:

```tsx
// theme/dark.ts
import { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',
  colors: { /* ... */ },
  shadows: { /* ... */ },
  components: { /* ... */ },
};

// theme/index.ts
export { darkTheme } from './dark';

export const themes = {
  neonic: neonicTheme,
  dark: darkTheme,
} as const;
```

## Theme Structure

Each theme must implement the `Theme` interface:

- **colors**: Primary, secondary, accent colors, backgrounds, text colors, borders, and gradients
- **shadows**: Glow effects and shadow definitions
- **components**: Pre-defined styles for buttons, cards, inputs, modals, and badges

## Migration from Inline Styles

To migrate components from inline Tailwind classes to theme-based styles:

1. Identify repeated color/shadow/component patterns
2. Replace with theme values using `useTheme()` hook
3. Use utility functions like `getThemeClasses()` for common patterns

Example migration:

**Before:**
```tsx
<button className="bg-cyan-500 hover:bg-cyan-600 text-white">
  Click
</button>
```

**After:**
```tsx
const { theme } = useTheme();
<button className={theme.components.button.gradient}>
  Click
</button>
```

