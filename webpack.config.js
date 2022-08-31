const path = require("node:path");
const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devServer = require("./webpack-config/devServer");
const html = require("./webpack-config/html");
const babel = require("./webpack-config/babel");
const css = require("./webpack-config/css");

const commonConfig = (mode) =>
  merge([
    { entry: [path.join(__dirname, "./src/index.ts")] },
    css.styles(mode),
    babel.transpile(),
    html.page({ title: "Webpak" }),
  ]);

const productionConfig = merge([
  {
    optimization: {
      minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
  },
]);

const developmentConfig = merge([devServer.serve()]);

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;

  switch (mode) {
    case "production":
      return merge(commonConfig(mode), productionConfig, { mode });
    case "development":
      return merge(commonConfig(mode), developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
