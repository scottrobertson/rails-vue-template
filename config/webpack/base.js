const Webpacker = require("@rails/webpacker");

// Add `vue-loader` to support "Single File Component"-style components
const vueConfig = require("./rules/vue");

// workaround for Webpacker issue: https://github.com/rails/webpacker/issues/2835
// eslint-disable-next-line array-callback-return
Webpacker.rules.map((rule, index) => {
  if (rule.type == "asset/source" && rule.test[0] == "/\\.html$/") {
    Webpacker.rules[index].exclude[0] = /\.(js|mjs|jsx|ts|tsx|vue\.html)$/;
  }
});

const exportConfig = Webpacker.merge(Webpacker.webpackConfig, vueConfig);
// Disabling `optimization` because the Webpack chunks aren't getting executed.
// That is, the HTML will load and the JavaScript is "pre-loaded" into "named
// chunks" but those chunks are never executed, so the Vue app is never started.
delete exportConfig.optimization;

const cssConfig = {
  resolve: {
    extensions: [".css"],
  },
};

module.exports = Webpacker.merge(exportConfig, cssConfig);
