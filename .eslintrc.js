module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-namespace': 'off',
  },
  ignorePatterns: ['dist/'],
};
