// src/plugins/webpack-dev-server.js
module.exports = function (context, options) {
  return {
    name: "custom-webpack-dev-server",
    configureWebpack(config, isServer, utils) {
      return {
        devServer: {
          proxy: [], // empty array to satisfy schema
        },
      };
    },
  };
};
