# Quickstart: Footer Pages with Multi-Column Layout

**Feature**: Footer Pages with Multi-Column Layout  
**Date**: 2025-01-27  
**Phase**: 1 - Design & Contracts

## Overview

This guide provides step-by-step instructions for implementing the multi-column footer component that replaces the existing single-column footer in `App.tsx`.

## Prerequisites

- React 19.2.0+
- TypeScript 5.8.2+
- SCSS support (via sass package)
- Existing codebase structure with `src/components/` and `src/pages/`

## Implementation Steps

### Step 1: Create Footer Component

Create `src/components/Footer.tsx`:

```typescript
import React from 'react';
import styles from './Footer.module.scss';

// Define TypeScript interfaces (from data-model.md)
interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  rel?: string;
}

interface FooterContent {
  columns: Array<{
    title: string;
    content: any; // Simplified for quickstart
  }>;
  copyright: string;
}

const Footer: React.FC = () => {
  // Default footer content
  const footerContent: FooterContent = {
    columns: [
      {
        title: '', // Column 1: Logo + About Us (no title)
        content: {
          logo: '[ NEXT PACE DEV ]',
          missionStatement: 'Our mission is to deliver high-speed development solutions...' // TODO: Generate actual mission statement
        }
      },
      {
        title: 'Projects',
        content: {
          links: [{
            label: 'Baltic Auto Price',
            href: 'https://balticautoprice.com',
            isExternal: true,
            rel: 'nofollow noopener noreferrer'
          }]
        }
      },
      {
        title: 'Solutions',
        content: {
          items: [
            'Corporate Process Optimization',
            'Small Business Automation',
            'Custom Web Applications',
            'Mobile App Development',
            'Cloud Infrastructure Setup'
          ] // TODO: Finalize solution ideas list
        }
      },
      {
        title: 'NEXTPACE BLOG',
        content: {
          link: {
            label: 'Visit Blog',
            href: 'https://nextpace.dev/blog',
            isExternal: false
          }
        }
      },
      {
        title: 'Terms',
        content: {
          links: [
            { label: 'Copyright Policy', href: '/copyright', isExternal: false },
            { label: 'Privacy Policy', href: '/privacy', isExternal: false }
          ]
        }
      }
    ],
    copyright: `© ${new Date().getFullYear()} Next Pace Development. All systems operational.`
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Render columns */}
          {footerContent.columns.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              {/* Column-specific rendering */}
            </div>
          ))}
        </div>
        <p className={styles.footerCopyright}>
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
```

### Step 2: Create Footer Styles

Create `src/components/Footer.module.scss`:

```scss
@use '../../styles/variables' as *;

.footer {
  padding: 3rem 0;
  background: $bg-secondary;
  border-top: 1px solid $border-default;
  position: relative;
  z-index: 10;
}

.footerContainer {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
}

.footerGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

.footerColumn {
  // Column styles
}

.footerLogo {
  font-size: 1.25rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 1rem;
}

.footerTitle {
  font-size: 0.875rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footerLink {
  display: block;
  color: $text-secondary;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: $primary;
  }
}

.footerCopyright {
  color: $text-tertiary;
  font-size: 0.75rem;
  text-align: center;
  margin-top: 2rem;
}

// Add more styles as needed
```

### Step 3: Update App.tsx

Replace the existing footer in `src/App.tsx`:

```typescript
// ... existing imports ...
import Footer from './components/Footer';

const App: React.FC = () => {
  // ... existing code ...

  return (
    <ThemeProvider initialTheme="neonic">
      <div className={styles.app}>
        {/* ... existing content ... */}
        <Footer />
        <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      </div>
    </ThemeProvider>
  );
};
```

### Step 4: Implement Column Rendering Logic

In `Footer.tsx`, implement rendering for each column type:

```typescript
const renderColumn = (column: FooterColumn, index: number) => {
  switch (column.content.type) {
    case 'about':
      return (
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>{column.content.logo}</div>
          <h3 className={styles.footerTitle}>About Us</h3>
          <p className={styles.footerText}>{column.content.missionStatement}</p>
        </div>
      );
    case 'projects':
      return (
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>{column.title}</h3>
          {column.content.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={styles.footerLink}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.rel}
              aria-label={link.isExternal ? `${link.label} (opens in new tab)` : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      );
    // ... other cases
  }
};
```

### Step 5: Test Responsive Behavior

1. Test desktop view (≥ 1024px): Verify 5 columns display side-by-side
2. Test tablet view (768px - 1023px): Verify columns wrap appropriately
3. Test mobile view (< 768px): Verify all columns stack vertically
4. Test link behavior:
   - External links open in new tab
   - Internal links open in same window
   - Verify `rel` attributes are correct

### Step 6: Verify Accessibility

1. Check contrast ratios (WCAG AA: 4.5:1 minimum)
2. Test keyboard navigation (Tab through all links)
3. Verify screen reader compatibility (aria-labels on external links)
4. Check semantic HTML (`<footer>`, proper heading hierarchy)

## Content TODO

Before final implementation, complete:

1. **Mission Statement**: Generate or provide About Us mission statement text (50-150 words)
2. **Solutions List**: Finalize list of solution ideas/use cases for Column 3
3. **Policy Pages**: Create `/copyright` and `/privacy` pages (or placeholder pages)

## Testing Checklist

- [ ] Footer displays correctly on desktop (5 columns)
- [ ] Footer stacks vertically on mobile (< 768px)
- [ ] All links are functional
- [ ] External links open in new tab with correct rel attributes
- [ ] Internal links open in same window
- [ ] Text contrast meets WCAG AA standards
- [ ] Keyboard navigation works
- [ ] Screen reader announces links correctly
- [ ] Footer maintains visual consistency with site design

## Common Issues

1. **Columns not stacking on mobile**: Check media query breakpoints match `$breakpoint-md` (768px)
2. **Links not opening correctly**: Verify `target` and `rel` attributes are set correctly
3. **Styling inconsistencies**: Ensure using SCSS variables from `styles/_variables.scss`
4. **TypeScript errors**: Verify interfaces match data-model.md definitions

## Next Steps

After implementation:
1. Run `/speckit.tasks` to create detailed task breakdown
2. Review and test footer functionality
3. Update content (mission statement, solutions list) as needed
4. Create policy pages if they don't exist

