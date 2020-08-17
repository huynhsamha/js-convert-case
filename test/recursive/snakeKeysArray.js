const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.snakeKeys(obj, { recursive: true, recursiveInArray: true }));

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
      {
        lv31: [
          1,
          'A',
          null,
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
            header_case: 11
          },
          '123',
          undefined
        ],
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
      [
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
          header_case: 11
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
