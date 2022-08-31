const path = require("node:path");
const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const devServer = require("./webpack-config/devServer");
const html = require("./webpack-config/html");
const babel = require("./webpack-config/babel");
const css = require("./webpack-config/css");

const commonConfig = merge([
  { entry: [path.join(__dirname, "./src")] },
  html.page({ title: "Webpak" }),
  css.styles(),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  { devtool: "eval-cheap-module-source-map" },
  {
    entry: ["webpack-plugin-serve/client"],
  },
  devServer.serve(),
  babel.transpile(),
]);

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;

  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
