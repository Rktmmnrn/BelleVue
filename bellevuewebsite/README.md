# Intro
Ceci est le site web de l'hotel restaurant BELLE VUE

## structure du projet
```
restaurant-nextjs/
├── public/
│   └── images/
│       ├── hero/
│       ├── about/
│       ├── menu/
│       ├── blog/
│       └── icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # <html>, polices, Header + Footer
│   │   ├── page.tsx            # / (Accueil)
│   │   ├── globals.css         # @import "tailwindcss" + @theme
│   │   ├── menu/page.tsx
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── layout/             # Header, Footer, InfoDrawer, MobileNav
│   │   ├── ui/                 # Button, SectionHeading, Divider...
│   │   ├── home/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── blog/
│   │   └── contact/
│   ├── data/                   # menu-items.js, blog-posts.js, site-config.js
│   └── hooks/                  # useSlideNav.js (état hamburger + panneau)
├── next.config.js
├── package.json
└── README.md
```

## Stack utilisé
- NextJS, TailwindCSS
- Motion pour les animations