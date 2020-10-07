const path = require('path')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~components': path.resolve(__dirname, 'app/javascript/components'),
              '~pages': path.resolve(__dirname, 'app/javascript/pages'),
            },
            extensions: [
              '.js', '.ts', '.vue',
            ],
          },
        },
      },
    },
  },
  rules: {
    'max-len': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true,
    }],
    'vue/no-v-html': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'import/extensions': 'off',
    'import/no-named-as-default-member': 'off',
    'semi': ['warn', 'never'],
  },
}
