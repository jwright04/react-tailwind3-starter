const ignoreAtRules = ['tailwind', 'apply'];

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  rules: {
    'declaration-no-important': true,
    'color-hex-case': 'upper',
  },
};
