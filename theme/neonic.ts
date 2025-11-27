import { Theme } from './types';

export const neonicTheme: Theme = {
  name: 'neonic',
  colors: {
    primary: '#06b6d4', // cyan-500
    secondary: '#e879f9', // fuchsia-400
    accent: '#8b5cf6', // violet-500
    background: {
      main: '#000000', // black
      secondary: '#171717', // neutral-900
      tertiary: '#0a0a0a', // black/50
    },
    text: {
      primary: '#ffffff', // white
      secondary: '#9ca3af', // gray-400
      tertiary: '#6b7280', // gray-500
      inverse: '#000000', // black
    },
    border: {
      default: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(6, 182, 212, 0.5)', // cyan-500/50
      accent: 'rgba(232, 121, 249, 0.3)', // fuchsia-500/30
    },
    gradient: {
      primary: 'from-cyan-500 to-blue-600',
      secondary: 'from-cyan-400 via-fuchsia-500 to-cyan-400',
      text: 'from-cyan-400 to-fuchsia-500',
      accent: 'from-cyan-500 to-fuchsia-500',
    },
  },
  shadows: {
    glow: {
      cyan: '0_0_20px_rgba(6,182,212,0.4)',
      fuchsia: '0_0_20px_rgba(232,121,249,0.4)',
      primary: '0_0_25px_rgba(6,182,212,0.6)',
      secondary: '0_0_30px_rgba(232,121,249,0.5)',
      white: '0_0_20px_rgba(255,255,255,0.3)',
    },
    card: '0_0_15px_rgba(6,182,212,0.15)',
    button: '0_0_20px_rgba(6,182,212,0.4)',
    modal: '0_0_50px_rgba(6,182,212,0.15)',
  },
  components: {
    button: {
      primary: 'bg-white text-black font-bold hover:bg-cyan-400 transition-colors',
      secondary: 'bg-white/10 hover:bg-white/20 text-white font-bold transition-colors',
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all',
      hover: 'hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]',
    },
    card: {
      base: 'bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl',
      hover: 'hover:border-cyan-500/50 hover:bg-white/10 transition-colors',
      border: 'border border-white/10',
    },
    input: {
      base: 'bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-colors',
      focus: 'focus:border-cyan-500',
    },
    modal: {
      backdrop: 'bg-black/80 backdrop-blur-sm',
      container: 'bg-neutral-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)]',
      header: 'border-b border-white/10 bg-black/50',
    },
    badge: {
      primary: 'border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300',
      secondary: 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    },
  },
};

