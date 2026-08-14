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
│   │   ├── layout.jsx          # <html>, polices, Header + Footer
│   │   ├── page.jsx            # / (Accueil)
│   │   ├── globals.css         # @import "tailwindcss" + @theme
│   │   ├── menu/page.jsx
│   │   ├── about/page.jsx
│   │   ├── blog/page.jsx
│   │   └── contact/page.jsx
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