
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    webextensions: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off'
  }
};
