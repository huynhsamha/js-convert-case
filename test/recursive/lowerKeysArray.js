const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.lowerKeys(obj, { recursive: true, recursiveInArray: true }));

/**
{
  camelcase: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascalcase: 5,
  'title case': 6,
  'dot.case': 7,
  'param-case': 8,
  'sentence case': 9,
  'path/case': 10,
  'header-case': 11,
  lv11: {
    camelcase: 1,
    uppercase: 2,
    lowercase: 3,
    snake_case: 4,
    pascalcase: 5,
    'title case': 6,
    'dot.case': 7,
    'param-case': 8,
    'sentence case': 9,
    'path/case': 10,
    'header-case': 11
  },
  lv12: {
    camelcase: 1,
    uppercase: 2,
    lowercase: 3,
    snake_case: 4,
    pascalcase: 5,
    'title case': 6,
    'dot.case': 7,
    'param-case': 8,
    'sentence case': 9,
    'path/case': 10,
    'header-case': 11,
    lv21: {
      camelcase: 1,
      uppercase: 2,
      lowercase: 3,
      snake_case: 4,
      pascalcase: 5,
      'title case': 6,
      'dot.case': 7,
      'param-case': 8,
      'sentence case': 9,
      'path/case': 10,
      'header-case': 11,
      lv31: {
        camelcase: 1,
        uppercase: 2,
        lowercase: 3,
        snake_case: 4,
        pascalcase: 5,
        'title case': 6,
        'dot.case': 7,
        'param-case': 8,
        'sentence case': 9,
        'path/case': 10,
        'header-case': 11
      },
      lv32: {
        camelcase: 1,
        uppercase: 2,
        lowercase: 3,
        snake_case: 4,
        pascalcase: 5,
        'title case': 6,
        'dot.case': 7,
        'param-case': 8,
        'sentence case': 9,
        'path/case': 10,
        'header-case': 11
      }
    },
    lv22: {
      camelcase: 1,
      uppercase: 2,
      lowercase: 3,
      snake_case: 4,
      pascalcase: 5,
      'title case': 6,
      'dot.case': 7,
      'param-case': 8,
      'sentence case': 9,
      'path/case': 10,
      'header-case': 11
    },
    lv23: [
      {
        camelcase: 1,
        uppercase: 2,
        lowercase: 3,
        snake_case: 4,
        pascalcase: 5,
        'title case': 6,
        'dot.case': 7,
        'param-case': 8,
        'sentence case': 9,
        'path/case': 10,
        'header-case': 11
      },
      {
        lv31: [
          1,
          'A',
          null,
          {
            camelcase: 1,
            uppercase: 2,
            lowercase: 3,
            snake_case: 4,
            pascalcase: 5,
            'title case': 6,
            'dot.case': 7,
            'param-case': 8,
            'sentence case': 9,
            'path/case': 10,
            'header-case': 11
          },
          '123',
          undefined
        ],
        lv32: {
          camelcase: 1,
          uppercase: 2,
          lowercase: 3,
          snake_case: 4,
          pascalcase: 5,
          'title case': 6,
          'dot.case': 7,
          'param-case': 8,
          'sentence case': 9,
          'path/case': 10,
          'header-case': 11
        }
      },
      [
        {
          camelcase: 1,
          uppercase: 2,
          lowercase: 3,
          snake_case: 4,
          pascalcase: 5,
          'title case': 6,
          'dot.case': 7,
          'param-case': 8,
          'sentence case': 9,
          'path/case': 10,
          'header-case': 11
        },
        5,
        '123',
        { a: 1, b: 2 },
        null
      ],
      null,
      undefined
    ]
  }
}

*/
