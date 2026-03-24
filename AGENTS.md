# AGENTS.md - Algarve Property Project

## Project Overview

This is an Astro-based property listing website for a real estate in the Algarve, Portugal. The site displays property details, gallery, video, lifestyle sections, location info, and contact details.

**Live URL**: https://kittyfromouterspace.github.io/algarve-property/

---

## Build Commands

```bash
# Development
npm run dev              # Start dev server at http://localhost:4321

# Production
npm run build            # Build for production (outputs to dist/)
npm run preview          # Preview production build locally

# Astro CLI
npm run astro -- --help  # Full Astro CLI help
```

**No linting or testing configured** - This is a simple static site.

---

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   └── Icon.astro       # SVG icon component
├── data/
│   └── property.ts     # All property content (edit this to update site)
├── layouts/
│   └── Layout.astro     # Base HTML layout with global styles
└── pages/
    └── index.astro      # Main landing page

public/
└── images/             # Static images (referenced in property.ts)
```

---

## Code Style Guidelines

### General Conventions

- This is an **Astro** project using **TypeScript**
- Uses Astro's `.astro` component format (HTML + frontmatter + scoped styles)
- No external CSS frameworks - uses vanilla CSS with CSS custom properties
- Follows existing patterns in the codebase

### TypeScript

- Uses strict TypeScript (`astro/tsconfigs/strict`)
- Component Props defined as interfaces in frontmatter
- Example from `src/components/Icon.astro`:

```typescript
interface Props {
  name: string;
  size?: number;
}
```

### Astro Components

- Frontmatter fence (`---`) at top of file
- Props destructured from `Astro.props`
- Scoped `<style>` at bottom of component
- Use `<slot />` for children when needed

### Imports

- Astro built-ins first: `import Layout from '../layouts/Layout.astro';`
- Relative imports for local modules
- Group by: Astro components → relative imports

### CSS

- Uses CSS custom properties in `:root` (see `Layout.astro`)
- Properties: `--color-primary`, `--color-accent`, `--color-warm`, `--color-text`, `--font-heading`, `--font-body`
- Scoped styles in each component
- Responsive with media queries (mobile breakpoint: 768px)

### Naming Conventions

- Components: PascalCase (e.g., `Icon.astro`, `Layout.astro`)
- Props interfaces: PascalCase with `Props` suffix
- Data files: camelCase (e.g., `property.ts`)
- CSS classes: kebab-case (e.g., `.nav-links`, `.hero-content`)

### Error Handling

- No formal error handling needed for this static site
- Property data uses `null` for optional fields (e.g., video URL, phone)

### Updating Property Content

All site content lives in `src/data/property.ts` - edit this file to change:
- Property name, tagline, price
- Hero image
- Description paragraphs
- Gallery images
- Highlights/features
- Lifestyle sections
- Location details
- Contact information

---

## Deployment

**Automatic deployment to GitHub Pages** via GitHub Actions:

1. Push to `main` branch triggers workflow (`.github/workflows/deploy.yml`)
2. Runs `npm run build` and deploys to GitHub Pages
3. Site URL: `https://kittyfromouterspace.github.io/algarve-property/`

**Manual deployment**: Run `npm run build` and upload `dist/` folder anywhere.

---

## Development Notes

- Uses `@astrojs/node` adapter
- Base path: `/algarve-property` (configured in `astro.config.mjs`)
- Images in `property.ts` should reference paths under `/algarve-property/images/`
- Video can be YouTube/Vimeo embed or self-hosted MP4
- Icons are inline SVGs defined in `Icon.astro` component
