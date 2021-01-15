# Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.

Each branch has a different setup for the named purpose, such as `typescript` showing a TypeScript variation.

_NOTE: Typically the `dist` or `public` folder is ignored in git, but for demonstrations purposes I've left it tracked._

## `react-full-project`

A full project setup with React (JSX) support.

It uses the Babel "automatic" runtime setting (which will be the default in Babel 8) for React 17 and up. With this setting you no longer need to import "react" in modules that just use JSX. [More on that here](https://babeljs.io/blog/2020/03/16/7.9.0#a-new-jsx-transform-11154).

Here are some other things this project supports:

- .jsx file extensions, and importing them without adding the extension
- importing `.css` files into javascript files.
- importing images (including `.svg`) through `import` syntax in javascript and `url()` syntax in css.
- automatically inlining images less than 8kb (webpack default, which is configurable) into the javascript bundle output. Anything over 8kb will be created as a resource file in the final output folder.

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
