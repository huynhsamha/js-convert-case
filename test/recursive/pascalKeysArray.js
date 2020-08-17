const jsConvert = require('../../index');
const { obj, log } = require('./_shared');

log(jsConvert.pascalKeys(obj, { recursive: true, recursiveInArray: true }));

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
      {
        Lv31: [
          1,
          'A',
          null,
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
            HeaderCase: 11
          },
          '123',
          undefined
        ],
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
      undefined,
      null,
      undefined
    ]
  }
}

 */
