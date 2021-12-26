const jsConvert = require('../../index');

// null or undefined, output is `null`
console.log(jsConvert.lowerKeys(undefined));
console.log(jsConvert.lowerKeys(null));
console.log(jsConvert.upperKeys(undefined));
console.log(jsConvert.upperKeys(null));
console.log(jsConvert.camelKeys(undefined));
console.log(jsConvert.camelKeys(null));
console.log(jsConvert.snakeKeys(undefined));
console.log(jsConvert.snakeKeys(null));
console.log(jsConvert.pascalKeys(undefined));
console.log(jsConvert.pascalKeys(null));
console.log(jsConvert.kebabKeys(null));

// invalid json object, output is `null`
console.log(jsConvert.lowerKeys(1));
console.log(jsConvert.lowerKeys('abc'));
console.log(jsConvert.lowerKeys([1, 2, 3]));
console.log(jsConvert.upperKeys(1));
console.log(jsConvert.upperKeys('abc'));
console.log(jsConvert.upperKeys([1, 2, 3]));
console.log(jsConvert.camelKeys(1));
console.log(jsConvert.camelKeys('abc'));
console.log(jsConvert.camelKeys([1, 2, 3]));
console.log(jsConvert.snakeKeys(1));
console.log(jsConvert.snakeKeys('abc'));
console.log(jsConvert.snakeKeys([1, 2, 3]));
console.log(jsConvert.pascalKeys(1));
console.log(jsConvert.pascalKeys('abc'));
console.log(jsConvert.pascalKeys([1, 2, 3]));
console.log(jsConvert.kebabKeys(1));
console.log(jsConvert.kebabKeys('abc'));
console.log(jsConvert.kebabKeys([1, 2, 3]));

// Object convert case
const obj = {
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
};

console.log(jsConvert.lowerKeys(obj));
console.log(jsConvert.upperKeys(obj));
console.log(jsConvert.camelKeys(obj));
console.log(jsConvert.snakeKeys(obj));
console.log(jsConvert.pascalKeys(obj));
console.log(jsConvert.kebabKeys(obj));

/**
{ camelcase: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascalcase: 5,
  'title case': 6,
  'dot.case': 7,
  'param-case': 8,
  'sentence case': 9,
  'path/case': 10,
  'header-case': 11 }

{ CAMELCASE: 1,
  UPPERCASE: 2,
  LOWERCASE: 3,
  SNAKE_CASE: 4,
  PASCALCASE: 5,
  'TITLE CASE': 6,
  'DOT.CASE': 7,
  'PARAM-CASE': 8,
  'SENTENCE CASE': 9,
  'PATH/CASE': 10,
  'HEADER-CASE': 11 }

{ camelCase: 1,
  uppercase: 2,
  lowercase: 3,
  snakeCase: 4,
  pascalCase: 5,
  titleCase: 6,
  dotCase: 7,
  paramCase: 8,
  sentenceCase: 9,
  pathCase: 10,
  headerCase: 11 }

{ camel_case: 1,
  uppercase: 2,
  lowercase: 3,
  snake_case: 4,
  pascal_case: 5,
  title_case: 6,
  dot_case: 7,
  param_case: 8,
  sentence_case: 9,
  path_case: 10,
  header_case: 11 }

{ CamelCase: 1,
  Uppercase: 2,
  Lowercase: 3,
  SnakeCase: 4,
  PascalCase: 5,
  TitleCase: 6,
  DotCase: 7,
  ParamCase: 8,
  SentenceCase: 9,
  PathCase: 10,
  HeaderCase: 11 }

{ 'camel-case': 1,
  uppercase: 2,
  lowercase: 3,
  'snake-case': 4,
  'pascal-case': 5,
  'title-case': 6,
  'dot-case': 7,
  'param-case': 8,
  'sentence-case': 9,
  'path-case': 10,
  'header-case': 11 }
 */
