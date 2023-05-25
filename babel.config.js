module.exports = function (api) {
  api.cache(false);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      ["babel-preset-typescript-vue3"],
      ["@babel/preset-typescript"],
    ],
  };
};
