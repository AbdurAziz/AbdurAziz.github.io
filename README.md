# Next Portfolio Starter (Brittany v4-inspired)

A clean one-page portfolio using **Next.js (App Router)**, **Tailwind**, and **Framer Motion**, matching the IA of Brittany Chiang’s v4:
Hero → About → Experience → Projects → Contact, with a sticky left sidebar.

## Quickstart
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build && npm start
```

## Customize
- **Branding**: tweak colors in `tailwind.config.ts` (navy/slate/green).
- **Copy**: edit `app/page.tsx` (Hero/About/Contact text).
- **Experience**: edit JSON at `content/experience.json`.
- **Projects**: edit JSON at `content/projects.json`.
- **Footer attribution**: keep a small credit line.

## Deploy
- **Vercel**: Import this repo → Framework: Next.js → Build Command: `next build` → Output: `.next`.
- **Netlify**: Build: `npm run build` → Publish dir: `.next` (enable Next adapter) or use Netlify’s Next runtime.

MIT — attribution appreciated.
