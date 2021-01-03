# Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.

Each branch has a different setup for the named purpose, such as `typescript` showing a TypeScript variation.

## bundle-visualization

Has an additional script, `npm run stats`, to output webpack json stats to be used in bundle visualization, such as [webpack visualizer](https://chrisbateman.github.io/webpack-visualizer/). Runs `webpack-bundle-analyzer` by default.

Also includes `uuid`, `lodash`, `lodash-es`, and `lodash.get` for comparison bundle sizes. Comments about using them are in the `src/barbarian.js` and `src/wizard.js`.

_NOTE: Typically the `dist` or `public` folder is ignored in git, but for demonstrations purposes I've left it tracked._

## Start using for a new project, or playground

1. Clone the repo
2. Select the branch you want
3. Run `npm i` to install dependencies
4. Run one of the following commands, depending on intent:

### Outputs `bundle-stats.json` and starts bundle analyzer server

```bash
npm run stats
```

### Production Build

```bash
npm run build
```

### Development Build

```bash
npm run build-dev
```

### Development Build, watching for file changes

```bash
npm run watch
```

### Development Server on port :8080

```bash
npm start
```

## See output without browser

After running a build command, you can see the output without opening a browser by running:

```bash
node dist/main.js
```
