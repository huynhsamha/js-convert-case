"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var js_pascalcase_1 = require("../../js-pascalcase");
/**
 * Convert string keys in an object to PascalCase format.
 * If `obj` isn't a json object, `null` is returned.
 */
function pascalKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = js_pascalcase_1.default(key);
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                value = pascalKeys(value, opt);
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = pascalKeys;
