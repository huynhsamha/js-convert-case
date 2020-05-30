"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Convert string keys in an object to UPPERCASE format.
 * If `obj` isn't a json object, `null` is returned.
 */
function upperKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = key.toUpperCase();
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                value = upperKeys(value, opt);
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = upperKeys;
