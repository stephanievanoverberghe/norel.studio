# Norel Studio

Passerelle officielle de Norel Art, construite avec Next.js, React et Tailwind CSS.

## Architecture

```text
src/
├── app/          Routage, métadonnées SEO et fichiers techniques
├── components/   Présentation, organisée par domaine visuel
├── config/       URLs, contacts, réseaux et bascule du futur site
├── content/      Contenus éditoriaux de la page
└── lib/          Données structurées JSON-LD
e2e/              Parcours navigateur, accessibilité, SEO et sécurité
```

La page est prérendue par Next.js. Aucun composant client n’est chargé : les visiteurs reçoivent du HTML, du CSS et les scripts minimaux du framework.

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

- `npm run dev` : serveur de développement.
- `npm run lint` : règles ESLint et Next.js.
- `npm run typecheck` : vérification TypeScript stricte.
- `npm run test` : tests unitaires Vitest.
- `npm run test:e2e` : tests Playwright sur desktop et mobile.
- `npm run build` : compilation de production.
- `npm run check` : lint, types, tests et build.

## Passage vers norel-art.fr

Quand la boutique est prête :

1. définir `NEXT_PUBLIC_NOREL_ART_LIVE=true` ;
2. redéployer et valider le bouton vers `norel-art.fr` ;
3. seulement après recette, configurer la redirection permanente du domaine.

## Sécurité

La configuration ajoute une CSP, HSTS, une politique de permissions restrictive, une protection anti-iframe et plusieurs en-têtes de défense en profondeur. La page n’embarque aucun script tiers, formulaire public ou API.
