const path = require('path')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/recommended',
  ],
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~brand-components': path.resolve(__dirname, 'app/javascript/brand-components'),
              '~components': path.resolve(__dirname, 'app/javascript/components'),
              '~models': path.resolve(__dirname, 'app/javascript/models'),
              '~pages': path.resolve(__dirname, 'app/javascript/pages'),
              '~images': path.resolve(__dirname, 'app/javascript/images'),
              '~utils': path.resolve(__dirname, 'app/javascript/utils'),
              '~plugins': path.resolve(__dirname, 'app/javascript/plugins'),
              '~store': path.resolve(__dirname, 'app/javascript/store'),
              '~locale': path.resolve(__dirname, 'app/javascript/locale'),
              '~stylesheets': path.resolve(__dirname, 'app/javascript/stylesheets'),
            },
            extensions: [
              '.js', '.ts', '.vue',
            ],
          },
        },
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'max-len': 'off',
    'no-alert': 'off',
    'global-require': 'off',
    semi: ['error', 'never'],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
      'no-param-reassign': 'off',
    }],
    'import/extensions': 'off',
  },
  overrides: [{
    files: ['*.ts', '**/*.ts', '**/*.vue'],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      ecmaVersion: 2020,
    },
    extends: [
      'airbnb-base',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:vue/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    env: {
      browser: true,
      jest: true,
    },
    rules: {
      'max-len': 'off',
      'no-alert': 'off',
      'global-require': 'off',
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      }],
      'import/extensions': 'off',
      'no-unused-vars': ['error', {
        ignoreRestSiblings: true,
      }],
      'no-undef': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      semi: ['error', 'never'],
      indent: 'off',
      '@typescript-eslint/indent': [2, 2],
      'prefer-destructuring': 'warn',
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/member-delimiter-style': ['warn', {
        multiline: {
          delimiter: 'none',
        },
      }],
    },
  }],
}
