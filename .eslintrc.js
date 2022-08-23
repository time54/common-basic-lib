/*
 * @Author: taojinchao
 * @Date: 2022-08-22 15:50:37
 * @LastEditors: taojinchao
 * @LastEditTime: 2022-08-23 14:50:19
 * @Description:
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['sonarjs'],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    camelcase: [0],
    'no-trailing-spaces': [0],
    'filenames/match-exported': [0],
    'no-multi-spaces': [0],
    indent: [0],
    'no-console': [0],
    'no-extra-parens': [0],
    'no-unused-vars': [0],
    'no-magic-numbers': [0],
    'no-shadow': 'off',
    'no-unreachable-loop': [0],
    'default-case-last': [0],
    'line-comment-position': [0],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    '@typescript-eslint/no-explicit-any': [0],
  },
};
