"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * Convert string keys in an object to lowercase format.
 * If `obj` isn't a json object, `null` is returned.
 */
function lowerKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = key.toLowerCase();
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                value = lowerKeys(value, opt);
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = lowerKeys;
