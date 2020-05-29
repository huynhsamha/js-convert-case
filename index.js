const toCamelCase = require('js-camelcase');
const toSnakeCase = require('js-snakecase');
const toPascalCase = require('js-pascalcase');
const toDotCase = require('js-dotcase');
const toPathCase = require('js-pathcase');
const toTextCase = require('js-textcase');
const toSentenceCase = require('js-sentencecase');
const toHeaderCase = require('js-headercase');

const lowerKeys = require('lowercase-keys-object');
const upperKeys = require('uppercase-keys-object');
const camelKeys = require('camelcase-keys-object');
const snakeKeys = require('snakecase-keys-object');
const pascalKeys = require('pascalcase-keys-object');

const toUpperCase = str => String(str || '').toUpperCase();
const toLowerCase = str => String(str || '').toLowerCase();

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
  toLowerCase,
  lowerKeys,
  upperKeys,
  camelKeys,
  snakeKeys,
  pascalKeys
};

module.exports = jsConvert;
