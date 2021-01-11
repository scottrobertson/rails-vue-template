module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  extends: [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["vue", "prettier"],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "import/extensions": "off",
  },
  overrides: [
    {
      files: ["*.ts", "**/*.ts", "**/*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        ecmaVersion: 2020,
      },
      extends: [
        "airbnb-base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/recommended",
        "prettier/@typescript-eslint",
        "prettier/vue",
        "plugin:prettier/recommended",
        "prettier",
      ],
      rules: {
        "import/extensions": "off",
      },
      env: {
        browser: true,
        jest: true,
      },
    },
  ],
};
