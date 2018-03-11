'use strict';

const toCamelCase = require('js-camelcase');
const toSnakeCase = require('js-snakecase');
const toPascalCase = require('js-pascalcase');
const toDotCase = require('js-dotcase');
const toPathCase = require('js-pathcase');
const toTextCase = require('js-textcase');
const toSentenceCase = require('js-sentencecase');
const toHeaderCase = require('js-headercase');

const toUpperCase = str => String(str).toUpperCase();
const toLowerCase = str => String(str).toLowerCase();

const jsConvert = {
  toCamelCase,
  toSnakeCase,
  toPascalCase,
  toDotCase,
  toPathCase,
  toTextCase,
  toSentenceCase,
  toHeaderCase,
  toUpperCase,
  toLowerCase
};

module.exports = jsConvert;
