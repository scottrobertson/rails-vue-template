const VueLoaderPlugin = require("vue-loader/lib/plugin");

// Ref: https://github.com/rails/webpacker#other-frameworks
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: { loader: "vue-loader" },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
};
