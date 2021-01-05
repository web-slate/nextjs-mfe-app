const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "productList",
        remotes: {
          // Key property will be called inside `container` App - import 'keyName/yourFile''
          'container': "container@http://localhost:3000/_next/static/runtime/remoteEntry.js",
        },
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
