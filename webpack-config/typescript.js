exports.transpile = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          options: {
            loader: "tsx",
            target: "es2015",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts"],
    },
  };
};
