const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "container",
        library: {
          type: config.output.libraryTarget,
          name: "container",
        },
        filename: "static/runtime/remoteEntry.js",
        exposes: {
          "./Header": "./pages/components/header",
        },
      })
    );

    return config;
  },
};
