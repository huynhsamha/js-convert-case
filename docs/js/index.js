(() => {

  const app = angular.module('jsConvertApp');

  app.controller('MainController', ['$scope', ($scope) => {

    $scope.converts = [
      { name: 'camelCase', func: jsConvert.toCamelCase, target: '#camel-case' },
      { name: 'snake_Case', func: jsConvert.toSnakeCase, target: '#snake-case' },
      { name: 'PascalCase', func: jsConvert.toPascalCase, target: '#pascal-case' },
      { name: 'dot.case', func: jsConvert.toDotCase, target: '#dot-case' },
      { name: 'path/case', func: jsConvert.toPathCase, target: '#path-case' },
      { name: 'text case', func: jsConvert.toTextCase, target: '#text-case' },
      { name: 'Sentence case', func: jsConvert.toSentenceCase, target: '#sentence-case' },
      { name: 'Header Case', func: jsConvert.toHeaderCase, target: '#header-case' },
      { name: 'UPPERCASE', func: jsConvert.toUpperCase, target: '#upper-case' },
      { name: 'lowercase', func: jsConvert.toLowerCase, target: '#lower-case' }
    ]

    $scope.converts.forEach((_) => { _.data = 'param-case'; _.showCopied = false });

  }]);

})();
