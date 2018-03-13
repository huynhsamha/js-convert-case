(() => {

  const app = angular.module('jsConvertApp');

  app.controller('MainController', ['$scope', ($scope) => {

    $scope.apiConvertString = [
      {
        name: 'camelCase',
        method: 'toCamelCase', package: 'js-camelcase',
        description: 'Return as a string with the separators denoted by having the next letter capitalized.',
        code: 'console.log(jsConvert.toCamelCase(\'param-case\')); // paramCase'
      },
      {
        name: 'snake_Case',
        method: 'toSnakeCase', package: 'js-snakecase',
        description: 'Return as a lower case, underscore separated string.',
        code: 'console.log(jsConvert.toSnakeCase(\'camelCase\')); // camel_case'
      },
      {
        name: 'PascalCase',
        method: 'toPascalCase', package: 'js-pascalcase',
        description: 'Return as a string denoted in the same fashion as camelCase, but with the first letter also capitalized.',
        code: 'console.log(jsConvert.toPascalCase(\'param-case\')); // ParamCase'
      },
      {
        name: 'dot.case',
        method: 'toDotCase', package: 'js-dotcase',
        description: 'Return as a lower case, period separated string.',
        code: 'console.log(jsConvert.toDotCase(\'Title Case\')); // title.case'
      },
      {
        name: 'path/case',
        method: 'toPathCase', package: 'js-pathcase',
        description: 'Return as a lower case, slash separated string.',
        code: 'console.log(jsConvert.toPathCase(\'camelCase\')); // camel/case'
      },
      {
        name: 'text case',
        method: 'toTextCase', package: 'js-textcase',
        description: 'Return the string without any casing (lower case, space separated).',
        code: 'console.log(jsConvert.toTextCase(\'camelCase\')); // camel case'
      },
      {
        name: 'Sentence case',
        method: 'toSentenceCase', package: 'js-sentencecase',
        description: 'Return as a lower case, space separated string with the first letter upper case.',
        code: 'console.log(jsConvert.toSentenceCase(\'camelCase\')); // Camel case'
      },
      {
        name: 'Header Case',
        method: 'toHeaderCase', package: 'js-headercase',
        description: 'Return as a space separated string with the first character of every word upper cased.',
        code: 'console.log(jsConvert.toHeaderCase(\'param-case\')); // Param Case'
      },
      {
        name: 'lowercase',
        method: 'toUpperCase',
        description: 'Similar to <code>String.prototype.toLowerCase()</code>',
        code: 'console.log(jsConvert.toLowerCase(\'Title Case\')); // title case'
      },
      {
        name: 'UPPERCASE',
        method: 'toLowerCase',
        description: 'Similar to <code>String.prototype.toUpperCase()</code>',
        code: 'console.log(jsConvert.toUpperCase(\'param-case\')); // PARAM-CASE'
      }
    ];

    $scope.apiConvertKeysObject = [
      {
        name: 'lowerKeys',
        method: 'lowerKeys', package: 'lowercase-keys-object',
        description: 'Return new object which keys is lowercase format.',
        code: `jsConvert.lowerKeys({
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
});`,
        output: `{
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
}`
      },
      {
        name: 'upperKeys',
        method: 'upperKeys', package: 'uppercase-keys-object',
        description: 'Return new object which keys is uppercase format.',
        code: `jsConvert.upperKeys({
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
});`,
        output: `{
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
}`
      },
      {
        name: 'camelKeys',
        method: 'camelKeys', package: 'camelcase-keys-object',
        description: 'Return new object which keys is camelcase format.',
        code: `jsConvert.camelKeys({
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
});`,
        output: `{
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
}`
      },
      {
        name: 'snakeKeys',
        method: 'snakeKeys', package: 'snakecase-keys-object',
        description: 'Return new object which keys is snakecase format.',
        code: `jsConvert.snakeKeys({
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
});`,
        output: `{
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
}`
      },
      {
        name: 'pascalKeys',
        method: 'pascalKeys', package: 'pascalcase-keys-object',
        description: 'Return new object which keys is pascalcase format.',
        code: `jsConvert.pascalKeys({
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
});`,
        output: `{
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
}`
      }
    ];

  }]);

})();
