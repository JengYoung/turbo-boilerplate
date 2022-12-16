module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ['next', 'turbo', 'plugin:react/recommended', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'eol-last': ['error', 'always'],
    'no-console': 'error',
    'react/no-unused-prop-types': 'error',
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['react', '@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],

      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        'react/no-unused-prop-types': 'error',
      },
    },
  ],
};
