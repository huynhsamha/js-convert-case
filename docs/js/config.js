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

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})();
