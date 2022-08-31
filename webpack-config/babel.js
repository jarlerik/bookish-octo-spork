const path = require("node:path");

exports.transpile = () => ({
  cache: true,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    chunkFilename: "[chunkhash].js",
  },
  entry: path.resolve(__dirname, "../src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
});
