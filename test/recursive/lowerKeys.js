const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.lowerKeys(obj));
console.log('============================================');
log(jsConvert.lowerKeys(obj, { recursive: true }));

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
    camelCase: 1,
    UPPERCASE: 2,
    lowercase: 3,
    snake_case: 4,
    PascalCase: 5,
    'Title Case': 6,
    'dot.case': 7,
    'param-case': 8,
    'Sentence case': 9,
    'path/case': 10,
    'Header-Case': 11
  },
  lv12: {
    camelCase: 1,
    UPPERCASE: 2,
    lowercase: 3,
    snake_case: 4,
    PascalCase: 5,
    'Title Case': 6,
    'dot.case': 7,
    'param-case': 8,
    'Sentence case': 9,
    'path/case': 10,
    'Header-Case': 11,
    lv21: {
      camelCase: 1,
      UPPERCASE: 2,
      lowercase: 3,
      snake_case: 4,
      PascalCase: 5,
      'Title Case': 6,
      'dot.case': 7,
      'param-case': 8,
      'Sentence case': 9,
      'path/case': 10,
      'Header-Case': 11,
      lv31: {
        camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11
      },
      lv32: {
        camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11
      }
    },
    lv22: {
      camelCase: 1,
      UPPERCASE: 2,
      lowercase: 3,
      snake_case: 4,
      PascalCase: 5,
      'Title Case': 6,
      'dot.case': 7,
      'param-case': 8,
      'Sentence case': 9,
      'path/case': 10,
      'Header-Case': 11
    },
    lv23: [
      {
        camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11
      },
      {
        lv31: [
          1,
          'A',
          null,
          {
            camelCase: 1,
            UPPERCASE: 2,
            lowercase: 3,
            snake_case: 4,
            PascalCase: 5,
            'Title Case': 6,
            'dot.case': 7,
            'param-case': 8,
            'Sentence case': 9,
            'path/case': 10,
            'Header-Case': 11
          },
          '123',
          undefined
        ],
        lv32: {
          camelCase: 1,
          UPPERCASE: 2,
          lowercase: 3,
          snake_case: 4,
          PascalCase: 5,
          'Title Case': 6,
          'dot.case': 7,
          'param-case': 8,
          'Sentence case': 9,
          'path/case': 10,
          'Header-Case': 11
        }
      },
      [
        {
          camelCase: 1,
          UPPERCASE: 2,
          lowercase: 3,
          snake_case: 4,
          PascalCase: 5,
          'Title Case': 6,
          'dot.case': 7,
          'param-case': 8,
          'Sentence case': 9,
          'path/case': 10,
          'Header-Case': 11
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
============================================
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
        camelCase: 1,
        UPPERCASE: 2,
        lowercase: 3,
        snake_case: 4,
        PascalCase: 5,
        'Title Case': 6,
        'dot.case': 7,
        'param-case': 8,
        'Sentence case': 9,
        'path/case': 10,
        'Header-Case': 11
      },
      {
        lv31: [
          1,
          'A',
          null,
          {
            camelCase: 1,
            UPPERCASE: 2,
            lowercase: 3,
            snake_case: 4,
            PascalCase: 5,
            'Title Case': 6,
            'dot.case': 7,
            'param-case': 8,
            'Sentence case': 9,
            'path/case': 10,
            'Header-Case': 11
          },
          '123',
          undefined
        ],
        lv32: {
          camelCase: 1,
          UPPERCASE: 2,
          lowercase: 3,
          snake_case: 4,
          PascalCase: 5,
          'Title Case': 6,
          'dot.case': 7,
          'param-case': 8,
          'Sentence case': 9,
          'path/case': 10,
          'Header-Case': 11
        }
      },
      [
        {
          camelCase: 1,
          UPPERCASE: 2,
          lowercase: 3,
          snake_case: 4,
          PascalCase: 5,
          'Title Case': 6,
          'dot.case': 7,
          'param-case': 8,
          'Sentence case': 9,
          'path/case': 10,
          'Header-Case': 11
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
