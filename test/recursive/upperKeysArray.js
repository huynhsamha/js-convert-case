const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.upperKeys(obj, { recursive: true, recursiveInArray: true }));

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
      {
        LV31: [
          1,
          'A',
          null,
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
            'HEADER-CASE': 11
          },
          '123',
          undefined
        ],
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
      undefined,
      null,
      undefined
    ]
  }
}

*/
