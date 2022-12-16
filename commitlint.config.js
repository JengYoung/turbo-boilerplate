const cz = require('./.cz-config.js');

const TYPE_ALWAYS = 'always';

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, TYPE_ALWAYS, 72],
    'body-leading-blank': [2, TYPE_ALWAYS],
    'body-max-length': [2, TYPE_ALWAYS, 400],
    'footer-leading-blank': [2, TYPE_ALWAYS],
    'type-enum': [2, TYPE_ALWAYS, cz.types.map(({ value }) => value)],
  },
};
