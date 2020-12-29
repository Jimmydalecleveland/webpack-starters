const mode = process.env.NODE_ENV || "development";
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },

  target: target,
  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
  },
};
