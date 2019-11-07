const webpack = require("webpack");
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        axios: "axios"
      })
    ]
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8888,
    https: false,
    hotOnly: false,
    proxy: {
      "/ifbp-boss-web": {
        target: "http://dev-test.service-czc.imfbp.com"
      }
    }
    // before: app => {
    // }
  }
};
