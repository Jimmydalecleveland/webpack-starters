# Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.

Each branch has a different setup for the named purpose, such as `typescript` showing a TypeScript variation.

## `babel-polyfills`

This branch supports older browsers by polyfilling JavaScript methods in addition to syntax transpiling.

`@babel/polyfill` has been [deprecated](https://babeljs.io/docs/en/usage#polyfill). It is now recommended to install and import `core-js` directly with `regenerator-runtime`, as `@babel/polyfill` was essentially a wrapper for those, according to the babel docs.

In Babel 6, the polyfills included proposals, but in 7 that is no longer the case, so controlling what features you import directly from `core-js` is the recommended solution.

```js
// e.g.
import "core-js/stable";
import "regenerator-runtime/runtime";
```

It also has a `.browserslistrc` with an example configuration to support older browsers than the defaults.

To see the list of browsers your project supports, use the `npx browserslist` command.

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

## References

- [github issue comment explaining intended setups for polyfills](https://github.com/babel/babel/issues/9853#issuecomment-619587386)
- [Babel docs stating @babel/polyfill deprecated and instructions](https://babeljs.io/docs/en/babel-polyfill)
- [core-js readme on @babel/polyfill deprecation](https://github.com/zloirock/core-js#babelpolyfill)
