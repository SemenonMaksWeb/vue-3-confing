module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Предупреждение в проде офф консоль
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // Предупреждение в проде офф деббагер
    // 'vue/max-attributes-per-line': [
    //   'warn',
    //   {
    //     // каждый атрибут на новую строчку
    //     singleline: 1,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: true,
    //     },
    //   },
    // ],
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     singleQuote: true,
    //     'jsx-max-props-per-line': [
    //       'warn',
    //       {
    //         maximum:
    //           '1',
    //         when:
    //           'always',
    //       },
    //     ],
    //   },
    // ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
