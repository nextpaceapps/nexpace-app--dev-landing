# Data Model: Footer Pages with Multi-Column Layout

**Feature**: Footer Pages with Multi-Column Layout  
**Date**: 2025-01-27  
**Phase**: 1 - Design & Contracts

## Overview

The footer component uses static content structured as TypeScript interfaces. No backend API or database storage is required. All content is defined in the component or passed as props.

## Entities

### FooterLink

Represents a single link in the footer.

**Fields**:
- `label: string` - Display text for the link
- `href: string` - URL destination
- `isExternal: boolean` - Whether link opens in new tab (default: false)
- `rel?: string` - Optional rel attribute (e.g., "nofollow noopener noreferrer")

**Example**:
```typescript
{
  label: "Baltic Auto Price",
  href: "https://balticautoprice.com",
  isExternal: true,
  rel: "nofollow noopener noreferrer"
}
```

---

### FooterColumn

Represents a single column in the footer layout.

**Fields**:
- `title: string` - Column heading/section title
- `content: FooterColumnContent` - Column content (varies by column type)

**Types**:
- `FooterColumnContent` can be:
  - `{ type: 'about', logo: string, missionStatement: string }` - Column 1
  - `{ type: 'projects', links: FooterLink[] }` - Column 2
  - `{ type: 'solutions', items: string[] }` - Column 3 (strings for now, will become links later)
  - `{ type: 'blog', link: FooterLink }` - Column 4
  - `{ type: 'terms', links: FooterLink[] }` - Column 5

**Example**:
```typescript
{
  title: "Projects",
  content: {
    type: 'projects',
    links: [
      {
        label: "Baltic Auto Price",
        href: "https://balticautoprice.com",
        isExternal: true,
        rel: "nofollow noopener noreferrer"
      }
    ]
  }
}
```

---

### FooterContent

Main data structure containing all footer content.

**Fields**:
- `columns: FooterColumn[]` - Array of 5 footer columns
- `copyright: string` - Copyright text (e.g., "© 2025 Next Pace Development. All systems operational.")

**Structure**:
```typescript
interface FooterContent {
  columns: [
    FooterColumn, // Column 1: About Us
    FooterColumn, // Column 2: Projects
    FooterColumn, // Column 3: Solutions
    FooterColumn, // Column 4: Blog
    FooterColumn  // Column 5: Terms
  ];
  copyright: string;
}
```

---

## TypeScript Interfaces

```typescript
interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  rel?: string;
}

type FooterColumnContent =
  | { type: 'about'; logo: string; missionStatement: string }
  | { type: 'projects'; links: FooterLink[] }
  | { type: 'solutions'; items: string[] }
  | { type: 'blog'; link: FooterLink }
  | { type: 'terms'; links: FooterLink[] };

interface FooterColumn {
  title: string;
  content: FooterColumnContent;
}

interface FooterContent {
  columns: FooterColumn[];
  copyright: string;
}
```

---

## Validation Rules

1. **FooterLink**:
   - `label` must be non-empty string
   - `href` must be valid URL (absolute or relative path)
   - If `isExternal` is true, `rel` should include "noopener noreferrer"
   - If link is to balticautoprice.com, `rel` must include "nofollow"

2. **FooterColumn**:
   - `title` must be non-empty string
   - `content` must match the column type
   - Column 1 must have type 'about' with logo and missionStatement
   - Column 2 must have type 'projects' with at least one link
   - Column 3 must have type 'solutions' with at least one item
   - Column 4 must have type 'blog' with a single link
   - Column 5 must have type 'terms' with exactly two links (Copyright Policy, Privacy Policy)

3. **FooterContent**:
   - Must have exactly 5 columns
   - Columns must be in order: About, Projects, Solutions, Blog, Terms
   - Copyright text must be non-empty

---

## State Transitions

N/A - Footer is a static component with no state transitions. Content is rendered from props or constants.

---

## Future Extensibility

1. **Solutions List**: Currently `string[]`, will be extended to `FooterLink[]` when solutions become clickable links with detailed descriptions.

2. **Dynamic Content**: If footer content needs to be fetched from an API in the future, the same interfaces can be used with API response mapping.

3. **Internationalization**: Footer content structure supports i18n by replacing string values with translation keys or localized content objects.

---

## Notes

- All content is currently static/constant
- No API endpoints required
- No database storage needed
- Content can be hardcoded in component or passed as props
- TypeScript interfaces ensure type safety during development

