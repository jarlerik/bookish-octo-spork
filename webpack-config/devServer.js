const { WebpackPluginServe } = require("webpack-plugin-serve");
const path = require("node:path");
exports.serve = () => ({
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
