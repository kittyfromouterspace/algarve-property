# Algarve Property: Estate Listing Site

Static property listing built with [Astro](https://astro.build/).

## Quick Start

```bash
npm install
npm run dev       # → http://localhost:4321
npm run build     # → dist/
```

## How to Update Content

All property data lives in **one file**: `src/data/property.ts`

### Replace Images

1. Drop your photos into `public/images/`
2. Open `src/data/property.ts`
3. Replace the Unsplash URLs with `/images/your-photo.jpg`

Example:
```ts
// Before (placeholder)
src: "https://images.unsplash.com/photo-...",

// After (your photo)
src: "/images/main-house.jpg",
```

### Add Video

1. Upload to YouTube/Vimeo and grab the embed URL, or drop an .mp4 in `public/video/`
2. In `property.ts`, change:
```ts
video: {
  url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  // or: url: "/video/walkthrough.mp4",
}
```

### Update Details

Edit any field in `src/data/property.ts`:
- `price`: set your asking price or keep "Price on Request"
- `contact`: add your email, phone, WhatsApp
- `location_details`: fill in nearest town, distances
- `description`: edit the story paragraphs
- `gallery`: add/remove photos

## Deploy (Free)

### Cloudflare Pages
1. Push to GitHub
2. Connect repo at dash.cloudflare.com → Pages
3. Build command: `npm run build`, output: `dist`

### Netlify
1. Push to GitHub
2. Connect at app.netlify.com
3. Build command: `npm run build`, publish: `dist`

### Vercel
```bash
npx vercel
```

## Structure

```
src/
  data/property.ts    ← ALL content lives here
  layouts/Layout.astro ← HTML shell, fonts, global styles
  pages/index.astro    ← The page template
public/
  images/              ← Drop your photos here
  favicon.svg
```
