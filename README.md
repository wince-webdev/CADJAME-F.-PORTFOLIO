# Portfolio — Florentin CADJAME

Portfolio one-page (React 19 + TanStack Start + Vite + Tailwind CSS v4).

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:8080

## Build de production

```bash
npm run build
```

## Déploiement (Vercel)

1. Pousser le dossier sur GitHub.
2. Sur Vercel : "Add New Project" > importer le dépôt > Deploy.
3. Chaque `git push` sur la branche principale redéploie automatiquement le site.

## Mettre à jour le contenu

- Photo, CV PDF, favicon : dossier `public/`
- Hero (nom, coordonnées) : `src/components/site/hero.tsx`
- À propos / Expériences / Études / Compétences / Contact : `src/components/site/sections.tsx`
- Réalisations & projets : `src/components/site/projects.tsx`
- Menu de navigation : `src/components/site/nav.tsx`
- Couleurs et typographie : `src/styles.css`
