# l23de.github.io

Get to know me through my personal website, both professionally and personally!

If you see a bug or have an idea for an improvement, leave them in the GitHub Issues pane! I'll be sure to read them and make changes accordingly!

<a href="https://l23de.github.io"><img src="public/splash.jpg" alt="drawing" width="800"/></a>

## Installation

Local Development

```bash
yarn # Installs all required dependencies
yarn dev # Runs a hot-reloadable local server to serve the website (Defaults to port 3000) 
```

Build and Deploy

```bash
# Run the above commands as well

yarn build # Just builds the files and places them in a local 'dist' folder
yarn deploy # Deploys to GitHub pages by default
yarn build-deploy # Just an alias for 'yarn build && yarn deploy'
```

## Technologies

All of these technologies were chosen so I can learn a new concept gradually throughout the development process, while also touching on areas that a very simple SPA might not always touch on (Vite for example)

- [Vue.js](https://v3.vuejs.org/) - Progressive Frontend Framework
  - [TypeScript](https://www.typescriptlang.org/) - Enables typechecking for JavaScript applications
  - [Vue Router](https://next.router.vuejs.org/) - Vue Router, helps with managing different routes in a single-page application (SPA)
  - [Quasar Framework](https://quasar.dev/) - Highly performant UI library for Vue 3 (Also a very extensible framework, but I mostly used the UI elements)
- [Vite](https://vitejs.dev/) - Frontend tooling that enables super fast server start, hot reloading, and various plugins and support (Similar to Webpack)
  - [SASS/SCSS](https://sass-lang.com/) - CSS Preprocessor, essentially makes CSS more powerful and easier to work with

This work is licensed under a [Creative Commons Attribution NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/)
