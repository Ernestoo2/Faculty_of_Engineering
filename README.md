# Faculty of Engineering and Technology Website

A Next.js 16 + TypeScript website for the Lead City University Faculty of Engineering. The project includes a responsive hero slider, mobile drawer navigation, faculty profiles, laboratory highlights, program tabs, contact cards, and external menu links.

## Features

- Responsive hero image slider on the landing header
- Mobile drawer navigation with real LCU menu URLs
- Faculty member cards and contact section
- Laboratory and facilities presentation
- Custom section components for About, Links, Members, Contact, Laboratories, and Footer
- Tailwind CSS v4 styling and Next.js image optimization

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `react-icons`

## Project structure

- `app/` - Next.js app directory
  - `page.tsx` - main page
  - `layout.tsx` - app layout
  - `globals.css` - global styles
  - `component/` - self-contained page components
    - `FacultyHeader.tsx`
    - `FacultyAbout.tsx`
    - `FacultyMembers.tsx`
    - `FacultyContact.tsx`
    - `FacultyLabouratories.tsx`
    - `FacultyLinks.tsx`
    - `FacultyPrograms.tsx`
    - `FacultyTabs.tsx`
    - `FacultyFooter.tsx`
- `public/Assets/` - static image assets used by the site

## Getting started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` to view the site.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — build for production
- `pnpm start` — start the production server
- `pnpm lint` — run ESLint

## Vercel CLI

If you need the Vercel CLI, use `pnpm exec` or `pnpm dlx`:

```bash
pnpm exec vercel
```

Or to run it once without installing:

```bash
pnpm dlx vercel
```

If you want to install it locally for repeated use:

```bash
pnpm add -D vercel
pnpm exec vercel
```

Or to install a plugin via the Vercel CLI:

```bash
pnpm dlx vercel plugins add vercel/vercel-plugin
```

## Notes

- Interactive components that use React state are marked with `use client`.
- Image assets are loaded from `public/Assets/` and referenced by URLs like `/Assets/E1.jpg`.
- The drawer menu in `app/component/FacultyHeader.tsx` contains the live LCU menu links.

## Contribution

Feel free to update component content, add new faculty data, or extend the navigation and page sections.
