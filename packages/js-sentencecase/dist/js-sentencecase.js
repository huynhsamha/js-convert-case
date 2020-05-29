var toSentenceCase = (function () {
  'use strict';

  function toSentenceCase(str = '') {
    if (!str) return '';

    const textcase = String(str)
      .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
      .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a}_${b.toLowerCase()}`)
      .replace(/[^A-Za-z0-9]+|_+/g, ' ')
      .toLowerCase();

    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
  }

  var jsSentencecase = toSentenceCase;

  return jsSentencecase;

}());
