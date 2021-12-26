"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var js_kebabcase_1 = require("../../js-kebabcase");
/**
 * Convert string keys in an object to kebab-case format.
 * @param obj: object to convert keys. If `obj` isn't a json object, `null` is returned.
 * @param opt: (optional) Options parameter, default is non-recursive.
 */
function kebabKeys(obj, opt) {
    if (opt === void 0) { opt = utils_1.DefaultOption; }
    if (!utils_1.isValidObject(obj))
        return null;
    opt = utils_1.validateOptions(opt);
    var res = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var nkey = js_kebabcase_1.default(key);
        if (opt.recursive) {
            if (utils_1.isValidObject(value)) {
                if (!utils_1.belongToTypes(value, opt.keepTypesOnRecursion)) {
                    value = kebabKeys(value, opt);
                }
            }
            else if (opt.recursiveInArray && utils_1.isArrayObject(value)) {
                value = __spreadArrays(value).map(function (v) {
                    var ret = v;
                    if (utils_1.isValidObject(v)) {
                        // object in array
                        if (!utils_1.belongToTypes(ret, opt.keepTypesOnRecursion)) {
                            ret = kebabKeys(v, opt);
                        }
                    }
                    else if (utils_1.isArrayObject(v)) {
                        // array in array
                        // workaround by using an object holding array value
                        var temp = kebabKeys({ key: v }, opt);
                        ret = temp.key;
                    }
                    return ret;
                });
            }
        }
        res[nkey] = value;
    });
    return res;
}
exports.default = kebabKeys;
