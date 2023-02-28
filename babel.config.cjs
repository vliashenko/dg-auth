module.exports = {
  plugins: ["effector/babel-plugin"],
  env: {
    test: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
        {
          targets: {
            node: "current",
          },
        },
      ],
      plugins: ["@babel/transform-runtime", "effector/babel-plugin"],
    },
  },
};
