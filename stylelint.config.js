module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-order'],
  rules: {
    'number-leading-zero': 'always', // всегда писать 0.3px а не .3px
    'number-max-precision': 3, // Количество дробных символов не более
    'function-calc-no-invalid': true, // calc валидация значении
    'function-calc-no-unspaced-operator': true, // пробелы в calc
    'string-no-newline': true, // Запрет использовать перенос строки без требующих символов
    'declaration-block-no-duplicate-properties': true, // запрет повторяющих символов
    'block-no-empty': true, // Запрещать пустые блоки
    'comment-no-empty': true, // Запрещать пустые комментарии
    'no-descending-specificity': true, // Запретить селекторам с более низкой специфичностью приходить после переопределения селекторов с более высокой специфичностью.
    'no-duplicate-selectors': true, // Запретить дубликаты селекторов
    'no-extra-semicolons': true, // Запретить лишние точки с запятыми
    'no-invalid-double-slash-comments': true, // Запрет 2 косые линии в качестве комментария
    'length-zero-no-unit': true, // Запретить значение величины для значение = 0
    'font-weight-notation': 'numeric', // font-weight запретить не численные значение
    'selector-pseudo-class-case': 'lower', // строчные буквы для селекторов псевдокласса
    'declaration-block-semicolon-newline-after': 'always', // всегда должна быть новой строки после запятой
    'declaration-block-semicolon-newline-before': 'never-multi-line', //В многострочных правилах никогда не должно быть пробелов перед точкой с запятой.
    'declaration-block-trailing-semicolon': 'always', // Всегда должна быть точка с запятой в конце.
    'block-closing-brace-empty-line-before': 'never', // запрещать вводить пустую строку перед закрывающей фигурной скобкой блоков.
    'block-closing-brace-newline-before': 'always', // всегда должна быть новой строки перед закрывающей скобкой
    'block-opening-brace-newline-after': 'always-multi-line', //В многострочных блоках после открывающей фигурной скобки всегда должна быть новая строка.
    'no-eol-whitespace': true, // Запрет пробелов в конце строки
    indentation: 2,
    'declaration-no-important': true, //Запрещать !important в объявлениях.
    'order/properties-order': [
      // последовательность стилей  в селекторе
      'display',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
    ],
    'order/order': [
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      {
        type: 'rule',
        selector: '^&::(before|after)',
      },
      {
        type: 'rule',
        selector: '^&:\\w',
      },
      {
        type: 'rule',
        selector: '^&_',
      },
      {
        type: 'rule',
        selector: '^.',
      },
    ],
  },
};
