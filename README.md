# Portfolio Website

This is a fork of Dan Szabo's excellent portfolio website https://github.com/Aspekt1024/portfolio.

This is a portfolio website made in Next.js with Tailwind CSS. It's my personal portfolio for game development, focusing on providing an easy way to add projects as time goes on.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

### Installation

Note: If you're planning to publish via GitHub Pages, make sure to clone to the following project name "your_username.github.io". There are some issues with paths in the current project that cause problems launching resources when not published as the root GitHub Page.

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your_username.github.io.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the app in development mode |
| `npm run build` | Build a production bundle to `out/` |

## Modifying Content

### Projects

Projects are contained in `lib/projects`. Text has multi-line and list support, and media can be added in the form of images, videos and youtube embeds.

### Personal Content

The About and Contact sections are contained in the following areas:

- `lib/about.ts` - the tagline and skills
- `components/hero.tsx` - name, title, profile image and high level stats
- `components/home-contact.tsx` - contact details at the bottom of the page. This is doubled up in `hero.tsx` for user convenience.

### Hosting on GitHub Pages
Note: Make sure that this repository is named the following project name "your_username.github.io". There are some issues with paths in the current project that cause problems launching resources when not published as the root GitHub Page.

1. Add the following deployment script as `.github/workflows/deploy.yml`
```name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install Dependencies (if any)
        run: npm install || true

      - name: Build Project (if applicable)
        run: npm run build || true

      - name: Add NoJekyll file
        run: touch ./out/.nojekyll || true

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: ./out/ # Change this if using a build folder like "dist" or "public"
```

This will push the contents of the out directory (along with an added .nojekyll file) to the gh-pages branch of your repository as a github action.

2. Set up your repository to deploy to GitHub pages from the root of the gh-pages branch
   a. Navigate to your repository on GitHub.
   b. Click on the "Settings" tab.
   c. Scroll down to the "Pages" section. Under "Source," select the gh-pages branch as your deployment source and save changes.
