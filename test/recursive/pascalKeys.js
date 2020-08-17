const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.pascalKeys(obj));
console.log('============================================');
log(jsConvert.pascalKeys(obj, { recursive: true }));

/**
{
  CamelCase: 1,
  Uppercase: 2,
  Lowercase: 3,
  SnakeCase: 4,
  PascalCase: 5,
  TitleCase: 6,
  DotCase: 7,
  ParamCase: 8,
  SentenceCase: 9,
  PathCase: 10,
  HeaderCase: 11,
  Lv11: {
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
  Lv12: {
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
  CamelCase: 1,
  Uppercase: 2,
  Lowercase: 3,
  SnakeCase: 4,
  PascalCase: 5,
  TitleCase: 6,
  DotCase: 7,
  ParamCase: 8,
  SentenceCase: 9,
  PathCase: 10,
  HeaderCase: 11,
  Lv11: {
    CamelCase: 1,
    Uppercase: 2,
    Lowercase: 3,
    SnakeCase: 4,
    PascalCase: 5,
    TitleCase: 6,
    DotCase: 7,
    ParamCase: 8,
    SentenceCase: 9,
    PathCase: 10,
    HeaderCase: 11
  },
  Lv12: {
    CamelCase: 1,
    Uppercase: 2,
    Lowercase: 3,
    SnakeCase: 4,
    PascalCase: 5,
    TitleCase: 6,
    DotCase: 7,
    ParamCase: 8,
    SentenceCase: 9,
    PathCase: 10,
    HeaderCase: 11,
    Lv21: {
      CamelCase: 1,
      Uppercase: 2,
      Lowercase: 3,
      SnakeCase: 4,
      PascalCase: 5,
      TitleCase: 6,
      DotCase: 7,
      ParamCase: 8,
      SentenceCase: 9,
      PathCase: 10,
      HeaderCase: 11,
      Lv31: {
        CamelCase: 1,
        Uppercase: 2,
        Lowercase: 3,
        SnakeCase: 4,
        PascalCase: 5,
        TitleCase: 6,
        DotCase: 7,
        ParamCase: 8,
        SentenceCase: 9,
        PathCase: 10,
        HeaderCase: 11
      },
      Lv32: {
        CamelCase: 1,
        Uppercase: 2,
        Lowercase: 3,
        SnakeCase: 4,
        PascalCase: 5,
        TitleCase: 6,
        DotCase: 7,
        ParamCase: 8,
        SentenceCase: 9,
        PathCase: 10,
        HeaderCase: 11
      }
    },
    Lv22: {
      CamelCase: 1,
      Uppercase: 2,
      Lowercase: 3,
      SnakeCase: 4,
      PascalCase: 5,
      TitleCase: 6,
      DotCase: 7,
      ParamCase: 8,
      SentenceCase: 9,
      PathCase: 10,
      HeaderCase: 11
    },
    Lv23: [
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
