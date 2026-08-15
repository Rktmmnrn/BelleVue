# Intro

Ceci est le site web de l'hotel restaurant BELLE VUE

## Stack utilisé

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion

---

## structure du projet

```
restaurant-nextjs/
├── public/
│   └── images/                # Placeholders générés
│       ├── about/
│       ├── blog/
│       ├── hero/
│       ├── home/
│       └── menu/
├── src/
│   ├── app/                           # Routes (App Router)
│   │   ├── layout.tsx                  # Layout racine : polices, metadata, JSON-LD, Header/Footer
│   │   ├── page.tsx                    # / (Accueil)
│   │   ├── globals.css                 # Tokens de design (@theme) + directive Tailwind
│   │   ├── sitemap.ts / robots.ts      # SEO
│   │   ├── not-found.tsx               # Page 404
│   │   ├── menu/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx        # Détail d'article (statique, generateStaticParams)
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── actions.ts              # Server Action du formulaire
│   ├── components/
│   │   ├── layout/    # Header, Footer, MobileNav, InfoDrawer
│   │   ├── ui/         # Button, SectionHeading, PageHero, Reveal, ScrollCarousel
│   │   ├── shared/     # Réutilisés sur 2+ pages : Stats, Testimonials, AboutIntro, BlogPostCard, LocationMap
│   │   ├── home/       # Sections propres à l'accueil
│   │   ├── menu/       # MenuExplorer (filtre par catégorie)
│   │   ├── about/      # Gallery, PrivateEvents, ChefPhilosophy
│   │   └── contact/    # ContactForm, ContactInfo, ContactFormSection
│   ├── data/           # Contenu du site — modifie ces fichiers, pas les composants
│   │   ├── site-config.ts   # Nom, contact, horaires, réseaux sociaux, nav
│   │   ├── menu-items.ts    # Plats par catégorie
│   │   └── blog-posts.ts    # Articles
│   └── hooks/
│       └── useSlideNav.ts   # État partagé menu mobile / panneau infos
├── next.config.ts
├── package.json
└── README.md
```

---

## Sommaire
 
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts disponibles](#scripts-disponibles)
- [Configuration du contenu](#configuration-du-contenu)
- [Checklist avant mise en ligne](#checklist-avant-mise-en-ligne)
- [Déploiement](#déploiement)
- [Notes techniques](#notes-techniques)

---

## Démarrage rapide
 
### Prérequis
 
- Node.js **20 LTS** ou plus récent (`node -v`)
- npm (fourni avec Node) — yarn/pnpm fonctionnent aussi
### Installation
 
```bash
git clone <url-de-ton-repo>
cd restaurant-nextjs
npm install
```
 
### Développement
 
```bash
npm run dev
```
 
Ouvre [http://localhost:3000](http://localhost:3000).
 
## Scripts disponibles
 
| Commande        | Description                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Serveur de développement (Turbopack)          |
| `npm run build` | Build de production                           |
| `npm run start` | Sert le build de production                   |
| `npm run lint`  | Vérifie le code avec ESLint                   |
 
## Configuration du contenu
 
Tout le contenu texte vit dans `src/data/`, séparé des composants :
 
- **`site-config.ts`** — nom du restaurant, coordonnées, horaires, réseaux sociaux,
  liens de navigation, URL du site
- **`menu-items.ts`** — les plats, organisés par catégorie
- **`blog-posts.ts`** — les articles du blog
Les images sont dans `public/images/`, organisées par page. Chaque emplacement a un
placeholder généré (fond bleu nuit, bordure dorée, libellé) — remplace le fichier en
gardant le même nom et le composant qui l'affiche n'a pas besoin de changer.
 