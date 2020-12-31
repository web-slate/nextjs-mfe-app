const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "productList",
        filename: "remoteEntry.js",
        exposes: {
          "./ProductListIndex": "./pages/index",
        },
      }),
    );

    return config;
  },
};
