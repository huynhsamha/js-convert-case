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
declare const toLowerCase: (str: string) => string;
declare const toUpperCase: (str: string) => string;
declare const jsConvert: {
    toCamelCase: typeof toCamelCase;
    toSnakeCase: typeof toSnakeCase;
    toPascalCase: typeof toPascalCase;
    toDotCase: typeof toDotCase;
    toPathCase: typeof toPathCase;
    toTextCase: typeof toTextCase;
    toSentenceCase: typeof toSentenceCase;
    toHeaderCase: typeof toHeaderCase;
    toKebabCase: typeof toKebabCase;
    toUpperCase: (str: string) => string;
    toLowerCase: (str: string) => string;
    lowerKeys: typeof lowerKeys;
    upperKeys: typeof upperKeys;
    camelKeys: typeof camelKeys;
    snakeKeys: typeof snakeKeys;
    pascalKeys: typeof pascalKeys;
    kebabKeys: typeof kebabKeys;
};
export { toCamelCase, toSnakeCase, toPascalCase, toDotCase, toPathCase, toTextCase, toSentenceCase, toHeaderCase, toKebabCase, toUpperCase, toLowerCase, lowerKeys, upperKeys, camelKeys, snakeKeys, pascalKeys, kebabKeys };
export default jsConvert;
