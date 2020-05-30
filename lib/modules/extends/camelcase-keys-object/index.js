"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var js_camelcase_1 = require("../../js-camelcase");
/**
 * Convert string keys in an object to camelCase format.
 * If `obj` isn't a json object, `null` is returned.
 */
function camelKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = js_camelcase_1.default(key);
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                value = camelKeys(value, opt);
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = camelKeys;
