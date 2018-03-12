(() => {

  // ngclipboard is modulecopy to clipboard
  // duScroll is module to scroll anchor smooth and more
  const app = angular.module('jsConvertApp', ['ngclipboard', 'duScroll']);

  // directive for select all text when click to textarea or input
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


  // directive for prism highlight code, use for binding with angular
  app.directive('ngPrism', [function () {
    return {
      restrict: 'A',
      scope: {
        source: '@'
      },
      link(scope, element, attrs) {
        scope.$watch('source', (v) => {
          if (v) {
            window.Prism.highlightElement(element.find('code')[0]);
          }
        });
      },
      template: '<code ng-bind=\'source\'></code>'
    };
  }]);


  // Common Controller for all page html in this project
  app.controller('CommonController', ['$scope', '$document', ($scope, $document) => {

    // Scroll Top Button
    $scope.showScrollTop = false;
    $document.on('scroll', () => {
      $scope.showScrollTop = $document.scrollTop() > 320;
      $scope.$apply();
    });

  }]);


  // Scroll Reveal is package for reveal element on scroll to it with animation.
  if (window.ScrollReveal) {
    // check if have package scroll reveal, config reveal
    // reveal all element with class scrollreveal
    window.sr = ScrollReveal();
    sr.reveal('.scrollreveal', { duration: 1100 });
  }

})();
