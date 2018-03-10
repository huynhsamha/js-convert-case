(() => {

  const app = angular.module('jsConvertApp');

  app.controller('MainController', ['$scope', ($scope) => {

    $scope.origin = '';
    $scope.dest = '';
    $scope.convertActive = 0;
    $scope.converts = [
      { name: 'camelCase', func: jsConvert.toCamelCase },
      { name: 'snake_Case', func: jsConvert.toSnakeCase },
      { name: 'PascalCase', func: jsConvert.toPascalCase },
      { name: 'dot.case', func: jsConvert.toDotCase },
      { name: 'path/case', func: jsConvert.toPathCase },
      { name: 'text case', func: jsConvert.toTextCase },
      { name: 'Sentence case', func: jsConvert.toSentenceCase },
      { name: 'Header Case', func: jsConvert.toHeaderCase },
      { name: 'UPPERCASE', func: jsConvert.toUpperCase },
      { name: 'lowercase', func: jsConvert.toLowerCase }
    ]

    $scope.onChangeOrigin = () => {
      $scope.dest = $scope.converts[$scope.convertActive].func($scope.origin);
    }

    $scope.onChangeConvert = (index) => {
      $scope.convertActive = index;
      $scope.dest = $scope.converts[index].func($scope.origin);
    }

    $scope.onReset = () => {
      $scope.origin = '';
      $scope.dest = '';
    }

    $scope.onCopyDest = () => {
      $scope.copied = true;
    }

    $scope.onLeaveCopy = () => {
      $scope.copied = false;
    }

  }]);

})();
