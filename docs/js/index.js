(() => {

  const app = angular.module('jsConvertApp', ['ngclipboard']);

  app.directive('selectOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length)
          }
        });
      }
    };
  }]);



  app.controller('MainController', ['$scope', ($scope) => {

    $scope.converts = [
      { name: 'camelCase', func: jsConvert.toCamelCase, target: 'toCamelCase' },
      { name: 'snake_Case', func: jsConvert.toSnakeCase, target: 'toSnakeCase' },
      { name: 'PascalCase', func: jsConvert.toPascalCase, target: 'toPascalCase' },
      { name: 'dot.case', func: jsConvert.toDotCase, target: 'toDotCase' },
      { name: 'path/case', func: jsConvert.toPathCase, target: 'toPathCase' },
      { name: 'text case', func: jsConvert.toTextCase, target: 'toTextCase' },
      { name: 'Sentence case', func: jsConvert.toSentenceCase, target: 'toSentenceCase' },
      { name: 'Header Case', func: jsConvert.toHeaderCase, target: 'toHeaderCase' },
      { name: 'UPPERCASE', func: jsConvert.toUpperCase, target: 'toUpperCase' },
      { name: 'lowercase', func: jsConvert.toLowerCase, target: 'toLowerCase' }
    ]

    $scope.converts.forEach((_) => { _.data = 'param-case'; _.showCopied = false });

  }]);

})();
