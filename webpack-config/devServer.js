const { WebpackPluginServe } = require("webpack-plugin-serve");
const path = require("node:path");
exports.serve = () => ({
  devtool: "eval-cheap-module-source-map",
  entry: ["webpack-plugin-serve/client", "./src/index.ts"],
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: parseInt(process.env.PORT, 10) || 8080,
      static: path.join(__dirname, "../dist"), // Expose if output.path changes
      liveReload: true,
      waitForBuild: true,
    }),
  ],
});
