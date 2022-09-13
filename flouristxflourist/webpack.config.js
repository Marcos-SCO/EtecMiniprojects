//Webpack requires this to work with directories
const path = require("path");

const isDevelopment = process.env.NODE_ENV == 'development';

const extract = require("mini-css-extract-plugin");

// This is main configuration object that tells Webpackw what to do.
module.exports = {
  //default mode is production
  mode: isDevelopment ? 'development' : 'production',
  watch: isDevelopment,
  //path to entry paint
  entry: "./resources/js/index.js",
  //path and filename of the final output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: extract.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        //applying rule
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            //using file-loader
            loader: "file-loader",
            options: {
              outputPath: "img",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new extract({
      filename: "style.css",
    }),
  ],
};
