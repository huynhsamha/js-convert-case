var toHeaderCase = (function () {
  'use strict';

  function toHeaderCase(str = '') {
    if (!str) return '';

    return String(str)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, ' ')
      .toLowerCase()
      .replace(/( ?)(\w+)( ?)/g, (m, a, b, c) => a + b.charAt(0).toUpperCase() + b.slice(1) + c);
  }

  var jsHeadercase = toHeaderCase;

  return jsHeadercase;

}());
