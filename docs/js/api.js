(() => {

  const app = angular.module('jsConvertApp', ['ngclipboard']);

  app.controller('MainController', ['$scope', ($scope) => {

    $scope.apis = [
      {
        name: 'camelCase',
        func: jsConvert.toCamelCase,
        method: 'toCamelCase', package: 'js-camelcase',
        description: 'Return as a string with the separators denoted by having the next letter capitalized.',
        code: `console.log(jsConvert.toCamelCase('param-case')); // paramCase`
      },
      {
        name: 'snake_Case',
        func: jsConvert.toSnakeCase,
        method: 'toSnakeCase', package: 'js-snakecase',
        description: 'Return as a lower case, underscore separated string.',
        code: `console.log(jsConvert.toSnakeCase('camelCase')); // camel_case`
      },
      {
        name: 'PascalCase',
        func: jsConvert.toPascalCase,
        method: 'toPascalCase', package: 'js-pascalcase',
        description: 'Return as a string denoted in the same fashion as camelCase, but with the first letter also capitalized.',
        code: `console.log(jsConvert.toPascalCase('param-case')); // ParamCase`
      },
      {
        name: 'dot.case',
        func: jsConvert.toDotCase,
        method: 'toDotCase', package: 'js-dotcase',
        description: 'Return as a lower case, period separated string.',
        code: `console.log(jsConvert.toDotCase('Title Case')); // title.case`
      },
      {
        name: 'path/case',
        func: jsConvert.toPathCase,
        method: 'toPathCase', package: 'js-pathcase',
        description: 'Return as a lower case, slash separated string.',
        code: `console.log(jsConvert.toPathCase('camelCase')); // camel/case`
      },
      {
        name: 'text case',
        func: jsConvert.toTextCase,
        method: 'toTextCase', package: 'js-textcase',
        description: 'Return the string without any casing (lower case, space separated).',
        code: `console.log(jsConvert.toTextCase('camelCase')); // camel case`
      },
      {
        name: 'Sentence case',
        func: jsConvert.toSentenceCase,
        method: 'toSentenceCase', package: 'js-sentencecase',
        description: 'Return as a lower case, space separated string with the first letter upper case.',
        code: `console.log(jsConvert.toSentenceCase('camelCase')); // Camel case`
      },
      {
        name: 'Header Case',
        func: jsConvert.toHeaderCase,
        method: 'toHeaderCase', package: 'js-headercase',
        description: 'Return as a space separated string with the first character of every word upper cased.',
        code: `console.log(jsConvert.toHeaderCase('param-case')); // Param Case`
      },
      {
        name: 'lowercase',
        func: jsConvert.toLowerCase,
        method: 'toUpperCase',
        description: `Similar to <code>String.prototype.toLowerCase()</code>`,
        code: `console.log(jsConvert.toLowerCase('Title Case')); // title case`
      },
      {
        name: 'UPPERCASE',
        func: jsConvert.toUpperCase,
        method: 'toLowerCase',
        description: `Similar to <code>String.prototype.toUpperCase()</code>`,
        code: `console.log(jsConvert.toUpperCase('param-case')); // PARAM-CASE`
      }
    ]

  }]);

})();
