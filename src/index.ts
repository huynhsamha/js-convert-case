/**
 * Author: <Ha Huynh> https://github.com/huynhsamha
 * Github: https://github.com/huynhsamha/js-convert-case
 * NPM Package: https://www.npmjs.com/package/js-convert-case
 */

import toCamelCase from './modules/js-camelcase';
import toSnakeCase from './modules/js-snakecase';
import toPascalCase from './modules/js-pascalcase';
import toDotCase from './modules/js-dotcase';
import toPathCase from './modules/js-pathcase';
import toTextCase from './modules/js-textcase';
import toSentenceCase from './modules/js-sentencecase';
import toHeaderCase from './modules/js-headercase';
import toKebabCase from './modules/js-kebabcase';

import lowerKeys from './modules/extends/lowercase-keys-object';
import upperKeys from './modules/extends/uppercase-keys-object';
import camelKeys from './modules/extends/camelcase-keys-object';
import snakeKeys from './modules/extends/snakecase-keys-object';
import pascalKeys from './modules/extends/pascalcase-keys-object';
import kebabKeys from './modules/extends/kebabcase-keys-object';

const toLowerCase = (str: string) => String(str || '').toLowerCase();
const toUpperCase = (str: string) => String(str || '').toUpperCase();

const jsConvert = {
  toCamelCase,
  toSnakeCase,
  toPascalCase,
  toDotCase,
  toPathCase,
  toTextCase,
  toSentenceCase,
  toHeaderCase,
  toKebabCase,
  toUpperCase,
  toLowerCase,
  lowerKeys,
  upperKeys,
  camelKeys,
  snakeKeys,
  pascalKeys,
  kebabKeys
};

export {
  toCamelCase,
  toSnakeCase,
  toPascalCase,
  toDotCase,
  toPathCase,
  toTextCase,
  toSentenceCase,
  toHeaderCase,
  toKebabCase,
  toUpperCase,
  toLowerCase,
  lowerKeys,
  upperKeys,
  camelKeys,
  snakeKeys,
  pascalKeys,
  kebabKeys
};

export default jsConvert;
