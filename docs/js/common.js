(() => {

  const app = angular.module('jsConvertApp', ['ngclipboard', 'duScroll']);

  app.directive('selectOnClick', ['$window', function ($window) {
    return {
      restrict: 'A',
      link(scope, element, attrs) {
        element.on('click', function () {
          if (!$window.getSelection().toString()) {
            // Required for mobile Safari
            this.setSelectionRange(0, this.value.length);
          }
        });
      }
    };
  }]);

  app.controller('CommonController', ['$scope', '$document', ($scope, $document) => {

    // Scroll Top
    $scope.showScrollTop = false;
    $document.on('scroll', () => {
      $scope.showScrollTop = $document.scrollTop() > 320;
      $scope.$apply();
    });

  }]);

  window.sr = ScrollReveal();
  sr.reveal('.scrollreveal', { duration: 1100 });

})();
