const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.upperKeys(obj));
console.log('============================================');
log(jsConvert.upperKeys(obj, { recursive: true }));

/**
{
  CAMELCASE: 1,
  UPPERCASE: 2,
  LOWERCASE: 3,
  SNAKE_CASE: 4,
  PASCALCASE: 5,
  'TITLE CASE': 6,
  'DOT.CASE': 7,
  'PARAM-CASE': 8,
  'SENTENCE CASE': 9,
  'PATH/CASE': 10,
  'HEADER-CASE': 11,
  LV11: {
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
  LV12: {
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
  CAMELCASE: 1,
  UPPERCASE: 2,
  LOWERCASE: 3,
  SNAKE_CASE: 4,
  PASCALCASE: 5,
  'TITLE CASE': 6,
  'DOT.CASE': 7,
  'PARAM-CASE': 8,
  'SENTENCE CASE': 9,
  'PATH/CASE': 10,
  'HEADER-CASE': 11,
  LV11: {
    CAMELCASE: 1,
    UPPERCASE: 2,
    LOWERCASE: 3,
    SNAKE_CASE: 4,
    PASCALCASE: 5,
    'TITLE CASE': 6,
    'DOT.CASE': 7,
    'PARAM-CASE': 8,
    'SENTENCE CASE': 9,
    'PATH/CASE': 10,
    'HEADER-CASE': 11
  },
  LV12: {
    CAMELCASE: 1,
    UPPERCASE: 2,
    LOWERCASE: 3,
    SNAKE_CASE: 4,
    PASCALCASE: 5,
    'TITLE CASE': 6,
    'DOT.CASE': 7,
    'PARAM-CASE': 8,
    'SENTENCE CASE': 9,
    'PATH/CASE': 10,
    'HEADER-CASE': 11,
    LV21: {
      CAMELCASE: 1,
      UPPERCASE: 2,
      LOWERCASE: 3,
      SNAKE_CASE: 4,
      PASCALCASE: 5,
      'TITLE CASE': 6,
      'DOT.CASE': 7,
      'PARAM-CASE': 8,
      'SENTENCE CASE': 9,
      'PATH/CASE': 10,
      'HEADER-CASE': 11,
      LV31: {
        CAMELCASE: 1,
        UPPERCASE: 2,
        LOWERCASE: 3,
        SNAKE_CASE: 4,
        PASCALCASE: 5,
        'TITLE CASE': 6,
        'DOT.CASE': 7,
        'PARAM-CASE': 8,
        'SENTENCE CASE': 9,
        'PATH/CASE': 10,
        'HEADER-CASE': 11
      },
      LV32: {
        CAMELCASE: 1,
        UPPERCASE: 2,
        LOWERCASE: 3,
        SNAKE_CASE: 4,
        PASCALCASE: 5,
        'TITLE CASE': 6,
        'DOT.CASE': 7,
        'PARAM-CASE': 8,
        'SENTENCE CASE': 9,
        'PATH/CASE': 10,
        'HEADER-CASE': 11
      }
    },
    LV22: {
      CAMELCASE: 1,
      UPPERCASE: 2,
      LOWERCASE: 3,
      SNAKE_CASE: 4,
      PASCALCASE: 5,
      'TITLE CASE': 6,
      'DOT.CASE': 7,
      'PARAM-CASE': 8,
      'SENTENCE CASE': 9,
      'PATH/CASE': 10,
      'HEADER-CASE': 11
    },
    LV23: [
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
