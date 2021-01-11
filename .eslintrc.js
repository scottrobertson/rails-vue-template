module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  extends: ["airbnb-base", "plugin:vue/recommended", "eslint:recommended", "prettier/vue", "plugin:prettier/recommended", "prettier"],
  plugins: ["vue", "prettier"],
  env: {
    node: true,
    browser: true,
  },
};
