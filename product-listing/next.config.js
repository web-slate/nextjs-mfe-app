const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "productList",
        library: {
          type: config.output.libraryTarget,
          name: "productList",
        },
        filename: "static/runtime/remoteEntry.js",
        exposes: {
          "./ProductListIndex": "./pages/index",
        },
      }),
    );

    return config;
  },
};
