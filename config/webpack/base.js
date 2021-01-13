const Webpacker = require("@rails/webpacker");
const vueConfig = require("./rules/vue");

// Disabling `optimization` because the Webpack chunks aren't getting executed.
// That is, the HTML will load and the JavaScript is "pre-loaded" into "named
// chunks" but those chunks are never executed, so the Vue app is never started.
delete Webpacker.webpackConfig.optimization;

const cssConfig = {
  resolve: {
    extensions: [".css"],
  },
};

// Merge vueConfig first: https://github.com/rails/webpacker/issues/2835#issuecomment-759772592
module.exports = Webpacker.merge(vueConfig, Webpacker.webpackConfig, cssConfig);
