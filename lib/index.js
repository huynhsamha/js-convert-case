"use strict";
/**
 * Author: <Ha Huynh> https://github.com/huynhsamha
 * Github: https://github.com/huynhsamha/js-convert-case
 * NPM Package: https://www.npmjs.com/package/js-convert-case
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabKeys = exports.pascalKeys = exports.snakeKeys = exports.camelKeys = exports.upperKeys = exports.lowerKeys = exports.toLowerCase = exports.toUpperCase = exports.toKebabCase = exports.toHeaderCase = exports.toSentenceCase = exports.toTextCase = exports.toPathCase = exports.toDotCase = exports.toPascalCase = exports.toSnakeCase = exports.toCamelCase = void 0;
var js_camelcase_1 = require("./modules/js-camelcase");
exports.toCamelCase = js_camelcase_1.default;
var js_snakecase_1 = require("./modules/js-snakecase");
exports.toSnakeCase = js_snakecase_1.default;
var js_pascalcase_1 = require("./modules/js-pascalcase");
exports.toPascalCase = js_pascalcase_1.default;
var js_dotcase_1 = require("./modules/js-dotcase");
exports.toDotCase = js_dotcase_1.default;
var js_pathcase_1 = require("./modules/js-pathcase");
exports.toPathCase = js_pathcase_1.default;
var js_textcase_1 = require("./modules/js-textcase");
exports.toTextCase = js_textcase_1.default;
var js_sentencecase_1 = require("./modules/js-sentencecase");
exports.toSentenceCase = js_sentencecase_1.default;
var js_headercase_1 = require("./modules/js-headercase");
exports.toHeaderCase = js_headercase_1.default;
var js_kebabcase_1 = require("./modules/js-kebabcase");
exports.toKebabCase = js_kebabcase_1.default;
var lowercase_keys_object_1 = require("./modules/extends/lowercase-keys-object");
exports.lowerKeys = lowercase_keys_object_1.default;
var uppercase_keys_object_1 = require("./modules/extends/uppercase-keys-object");
exports.upperKeys = uppercase_keys_object_1.default;
var camelcase_keys_object_1 = require("./modules/extends/camelcase-keys-object");
exports.camelKeys = camelcase_keys_object_1.default;
var snakecase_keys_object_1 = require("./modules/extends/snakecase-keys-object");
exports.snakeKeys = snakecase_keys_object_1.default;
var pascalcase_keys_object_1 = require("./modules/extends/pascalcase-keys-object");
exports.pascalKeys = pascalcase_keys_object_1.default;
var kebabcase_keys_object_1 = require("./modules/extends/kebabcase-keys-object");
exports.kebabKeys = kebabcase_keys_object_1.default;
var toLowerCase = function (str) { return String(str || '').toLowerCase(); };
exports.toLowerCase = toLowerCase;
var toUpperCase = function (str) { return String(str || '').toUpperCase(); };
exports.toUpperCase = toUpperCase;
var jsConvert = {
    toCamelCase: js_camelcase_1.default,
    toSnakeCase: js_snakecase_1.default,
    toPascalCase: js_pascalcase_1.default,
    toDotCase: js_dotcase_1.default,
    toPathCase: js_pathcase_1.default,
    toTextCase: js_textcase_1.default,
    toSentenceCase: js_sentencecase_1.default,
    toHeaderCase: js_headercase_1.default,
    toKebabCase: js_kebabcase_1.default,
    toUpperCase: toUpperCase,
    toLowerCase: toLowerCase,
    lowerKeys: lowercase_keys_object_1.default,
    upperKeys: uppercase_keys_object_1.default,
    camelKeys: camelcase_keys_object_1.default,
    snakeKeys: snakecase_keys_object_1.default,
    pascalKeys: pascalcase_keys_object_1.default,
    kebabKeys: kebabcase_keys_object_1.default
};
exports.default = jsConvert;
