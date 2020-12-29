# Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.

Each branch has a different setup for the named purpose, such as `typescript` showing a TypeScript variation.

## `typescript`

This shows a straightforward TypeScript setup, but does include any browser html file like some of the others. Use `node` to run the final `dist/main.js` output.

_NOTE: Typically the `dist` or `public` folder is ignored in git, but for demonstrations purposes I've left it tracked._

## Start using for a new project, or playground

1. Clone the repo
2. Select the branch you want
3. Run `npm i` to install dependencies
4. Run one of the following commands, depending on intent:

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
