const jsConvert = require('../index');

console.log(jsConvert.toCamelCase('param-case')); // paramCase
console.log(jsConvert.toCamelCase('camelCase')); // camelCase
console.log(jsConvert.toCamelCase('Title Case')); // titleCase

console.log(jsConvert.toSnakeCase('param-case')); // param_case
console.log(jsConvert.toSnakeCase('camelCase')); // camel_case
console.log(jsConvert.toSnakeCase('Title Case')); // title_case

console.log(jsConvert.toPascalCase('param-case')); // ParamCase
console.log(jsConvert.toPascalCase('camelCase')); // CamelCase
console.log(jsConvert.toPascalCase('Title Case')); // TitleCase

console.log(jsConvert.toDotCase('param-case')); // param.case
console.log(jsConvert.toDotCase('camelCase')); // camel.case
console.log(jsConvert.toDotCase('Title Case')); // title.case

console.log(jsConvert.toPathCase('param-case')); // param/case
console.log(jsConvert.toPathCase('camelCase')); // camel/case
console.log(jsConvert.toPathCase('Title Case')); // title/case

console.log(jsConvert.toTextCase('param-case')); // param case
console.log(jsConvert.toTextCase('camelCase')); // camel case
console.log(jsConvert.toTextCase('Title Case')); // title case

console.log(jsConvert.toSentenceCase('param-case')); // Param case
console.log(jsConvert.toSentenceCase('camelCase')); // Camel case
console.log(jsConvert.toSentenceCase('Title Case')); // Title case

console.log(jsConvert.toHeaderCase('param-case')); // Param Case
console.log(jsConvert.toHeaderCase('camelCase')); // Camel Case
console.log(jsConvert.toHeaderCase('Title Case')); // Title Case

console.log(jsConvert.toLowerCase('param-case')); // param-case
console.log(jsConvert.toLowerCase('Title Case')); // title case
console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE
console.log(jsConvert.toUpperCase('Title Case')); // TITLE CASE


// Specific values
console.log(jsConvert.toCamelCase('')); // => ''
console.log(jsConvert.toSnakeCase(null)); // => ''
console.log(jsConvert.toPascalCase(undefined)); // => ''

// Complicated values
const str = '!@#$  = Hello___world ..<>| \\ 123_ _456 & l sn_ca - cmCa - PcCa - dot.ca - txt ca - Sen ca - Hd Ca %^$^%&';
console.log(jsConvert.toCamelCase(str)); // => 'helloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toPascalCase(str)); // => 'HelloWorld123456LSnCaCmCaPcCaDotCaTxtCaSenCaHdCa'
console.log(jsConvert.toSnakeCase(str)); // => 'hello_world_123_456_l_sn_ca_cm_ca_pc_ca_dot_ca_txt_ca_sen_ca_hd_ca'
console.log(jsConvert.toDotCase(str)); // => 'hello.world.123.456.l.sn.ca.cm.ca.pc.ca.dot.ca.txt.ca.sen.ca.hd.ca'
console.log(jsConvert.toPathCase(str)); // => 'hello/world/123/456/l/sn/ca/cm/ca/pc/ca/dot/ca/txt/ca/sen/ca/hd/ca'
console.log(jsConvert.toTextCase(str)); // => 'hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toSentenceCase(str)); // => 'Hello world 123 456 l sn ca cm ca pc ca dot ca txt ca sen ca hd ca'
console.log(jsConvert.toHeaderCase(str)); // => 'Hello World 123 456 L Sn Ca Cm Ca Pc Ca Dot Ca Txt Ca Sen Ca Hd Ca'


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
 */

// All output is null
console.log(jsConvert.lowerKeys(undefined));
console.log(jsConvert.lowerKeys(null));
console.log(jsConvert.upperKeys(undefined));
console.log(jsConvert.upperKeys(null));
console.log(jsConvert.camelKeys(undefined));
console.log(jsConvert.camelKeys(null));
