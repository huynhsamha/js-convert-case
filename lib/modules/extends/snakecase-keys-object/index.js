"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var js_snakecase_1 = require("../../js-snakecase");
/**
 * Convert string keys in an object to snake_case format.
 * If `obj` isn't a json object, `null` is returned.
 */
function snakeKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = js_snakecase_1.default(key);
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                value = snakeKeys(value, opt);
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = snakeKeys;
