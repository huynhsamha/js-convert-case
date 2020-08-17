const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.camelKeys(obj, { recursive: true, recursiveInArray: true }));

/**
{
  camelCase: 1,
  uppercase: 2,
  lowercase: 3,
  snakeCase: 4,
  pascalCase: 5,
  titleCase: 6,
  dotCase: 7,
  paramCase: 8,
  sentenceCase: 9,
  pathCase: 10,
  headerCase: 11,
  lv11: {
    camelCase: 1,
    uppercase: 2,
    lowercase: 3,
    snakeCase: 4,
    pascalCase: 5,
    titleCase: 6,
    dotCase: 7,
    paramCase: 8,
    sentenceCase: 9,
    pathCase: 10,
    headerCase: 11
  },
  lv12: {
    camelCase: 1,
    uppercase: 2,
    lowercase: 3,
    snakeCase: 4,
    pascalCase: 5,
    titleCase: 6,
    dotCase: 7,
    paramCase: 8,
    sentenceCase: 9,
    pathCase: 10,
    headerCase: 11,
    lv21: {
      camelCase: 1,
      uppercase: 2,
      lowercase: 3,
      snakeCase: 4,
      pascalCase: 5,
      titleCase: 6,
      dotCase: 7,
      paramCase: 8,
      sentenceCase: 9,
      pathCase: 10,
      headerCase: 11,
      lv31: {
        camelCase: 1,
        uppercase: 2,
        lowercase: 3,
        snakeCase: 4,
        pascalCase: 5,
        titleCase: 6,
        dotCase: 7,
        paramCase: 8,
        sentenceCase: 9,
        pathCase: 10,
        headerCase: 11
      },
      lv32: {
        camelCase: 1,
        uppercase: 2,
        lowercase: 3,
        snakeCase: 4,
        pascalCase: 5,
        titleCase: 6,
        dotCase: 7,
        paramCase: 8,
        sentenceCase: 9,
        pathCase: 10,
        headerCase: 11
      }
    },
    lv22: {
      camelCase: 1,
      uppercase: 2,
      lowercase: 3,
      snakeCase: 4,
      pascalCase: 5,
      titleCase: 6,
      dotCase: 7,
      paramCase: 8,
      sentenceCase: 9,
      pathCase: 10,
      headerCase: 11
    },
    lv23: [
      {
        camelCase: 1,
        uppercase: 2,
        lowercase: 3,
        snakeCase: 4,
        pascalCase: 5,
        titleCase: 6,
        dotCase: 7,
        paramCase: 8,
        sentenceCase: 9,
        pathCase: 10,
        headerCase: 11
      },
      {
        lv31: [
          1,
          'A',
          null,
          {
            camelCase: 1,
            uppercase: 2,
            lowercase: 3,
            snakeCase: 4,
            pascalCase: 5,
            titleCase: 6,
            dotCase: 7,
            paramCase: 8,
            sentenceCase: 9,
            pathCase: 10,
            headerCase: 11
          },
          '123',
          undefined
        ],
        lv32: {
          camelCase: 1,
          uppercase: 2,
          lowercase: 3,
          snakeCase: 4,
          pascalCase: 5,
          titleCase: 6,
          dotCase: 7,
          paramCase: 8,
          sentenceCase: 9,
          pathCase: 10,
          headerCase: 11
        }
      },
      [
        {
          camelCase: 1,
          uppercase: 2,
          lowercase: 3,
          snakeCase: 4,
          pascalCase: 5,
          titleCase: 6,
          dotCase: 7,
          paramCase: 8,
          sentenceCase: 9,
          pathCase: 10,
          headerCase: 11
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
