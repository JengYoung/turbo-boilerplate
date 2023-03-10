module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  importOrder: [
    '^react(.*)$',
    '^next(.*)$',
    '^jotai(.*)$',
    '^@emotion/(.*)$',
    '^@pages/(.*)$',
    'chakra-ui(.*)$',
    'ui',
    '^@templates/(.*)$',
    '^@store',
    '^@store/(.*)$',
    '^@hooks/(.*)$',
    '^@assets/(.*)$',
    '^@styles/(.*)$',
    '^@utils/(.*)$',
    '^~/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
