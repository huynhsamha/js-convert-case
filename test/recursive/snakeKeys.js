const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.snakeKeys(obj));
console.log('===========================================');
log(jsConvert.snakeKeys(obj, { recursive: true }));

/**
{
  camel_case: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascal_case: 5,
  title_case: 6,
  dot_case: 7,
  param_case: 8,
  sentence_case: 9,
  path_case: 10,
  header_case: 11,
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
===========================================
{
  camel_case: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascal_case: 5,
  title_case: 6,
  dot_case: 7,
  param_case: 8,
  sentence_case: 9,
  path_case: 10,
  header_case: 11,
  lv11: {
    camel_case: 1,
    uppercase: 2,
    lowercase: 3,
    snake_case: 4,
    pascal_case: 5,
    title_case: 6,
    dot_case: 7,
    param_case: 8,
    sentence_case: 9,
    path_case: 10,
    header_case: 11
  },
  lv12: {
    camel_case: 1,
    uppercase: 2,
    lowercase: 3,
    snake_case: 4,
    pascal_case: 5,
    title_case: 6,
    dot_case: 7,
    param_case: 8,
    sentence_case: 9,
    path_case: 10,
    header_case: 11,
    lv21: {
      camel_case: 1,
      uppercase: 2,
      lowercase: 3,
      snake_case: 4,
      pascal_case: 5,
      title_case: 6,
      dot_case: 7,
      param_case: 8,
      sentence_case: 9,
      path_case: 10,
      header_case: 11,
      lv31: {
        camel_case: 1,
        uppercase: 2,
        lowercase: 3,
        snake_case: 4,
        pascal_case: 5,
        title_case: 6,
        dot_case: 7,
        param_case: 8,
        sentence_case: 9,
        path_case: 10,
        header_case: 11
      },
      lv32: {
        camel_case: 1,
        uppercase: 2,
        lowercase: 3,
        snake_case: 4,
        pascal_case: 5,
        title_case: 6,
        dot_case: 7,
        param_case: 8,
        sentence_case: 9,
        path_case: 10,
        header_case: 11
      }
    },
    lv22: {
      camel_case: 1,
      uppercase: 2,
      lowercase: 3,
      snake_case: 4,
      pascal_case: 5,
      title_case: 6,
      dot_case: 7,
      param_case: 8,
      sentence_case: 9,
      path_case: 10,
      header_case: 11
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
