const { override, addWebpackAlias, addBabelPlugins } = require("customize-cra");
const path = require("path");
const webpack = require('webpack');

const crypto = require('crypto');
global.crypto = crypto;

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src", "components"),
    "@assets": path.resolve(__dirname, "src", "assets"),
    "@config": path.resolve(__dirname, "src", "config"),
    "@hooks": path.resolve(__dirname, "src", "hooks"),
    "@contexts": path.resolve(__dirname, "src", "contexts"),
  }),

  addBabelPlugins(["babel-plugin-styled-components"]),

  function(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
  }
);
