export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: {
    main: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  border: {
    default: string;
    hover: string;
    accent: string;
  };
  gradient: {
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
}

export interface ThemeShadows {
  glow: {
    cyan: string;
    fuchsia: string;
    primary: string;
    secondary: string;
    white: string;
  };
  card: string;
  button: string;
  modal: string;
}

export interface ThemeComponentStyles {
  button: {
    primary: string;
    secondary: string;
    gradient: string;
    hover: string;
  };
  card: {
    base: string;
    hover: string;
    border: string;
  };
  input: {
    base: string;
    focus: string;
  };
  modal: {
    backdrop: string;
    container: string;
    header: string;
  };
  badge: {
    primary: string;
    secondary: string;
  };
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  shadows: ThemeShadows;
  components: ThemeComponentStyles;
}

