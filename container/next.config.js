const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          // Key property will be called inside `container` App - import 'keyName/yourFile''
          '@plp': "productList@http://localhost:3001/_next/static/runtime/remoteEntry.js",
        },
        library: {
          type: config.output.libraryTarget,
          name: "container",
        },
        filename: "static/runtime/remoteEntry.js",
        exposes: {
          "./Header": "./pages/components/header/index",
        },
      })
    );

    return config;
  },
};
