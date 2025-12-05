// TypeScript interfaces for Footer component
// Based on data-model.md specifications

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  rel?: string;
}

export type FooterColumnContent =
  | { type: 'about'; logo: string; missionStatement: string }
  | { type: 'projects'; links: FooterLink[] }
  | { type: 'solutions'; items: string[] }
  | { type: 'blog'; link: FooterLink }
  | { type: 'terms'; links: FooterLink[] };

export interface FooterColumn {
  title: string;
  content: FooterColumnContent;
}

export interface FooterContent {
  columns: FooterColumn[];
  copyright: string;
}

