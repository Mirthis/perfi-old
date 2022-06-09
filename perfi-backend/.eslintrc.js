module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { consistent: true },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'operator-linebreak': 'off',
    // "@typescript-eslint/semi": ["error"],
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/restrict-template-expressions": "off",
    // "@typescript-eslint/restrict-plus-operands": "off",
    // "@typescript-eslint/no-unsafe-member-access": "off",
    // "no-case-declarations": "off",
  },
};
