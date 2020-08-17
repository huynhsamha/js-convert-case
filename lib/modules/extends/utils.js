"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObject = exports.isArrayObject = exports.validateOptions = exports.DefaultOption = void 0;
/**
 * Default options for convert function. This option is not recursive.
 */
exports.DefaultOption = {
    recursive: false,
    recursiveInArray: false
};
exports.validateOptions = function (opt) {
    if (opt === void 0) { opt = exports.DefaultOption; }
    if (opt.recursive == null) {
        opt = exports.DefaultOption;
    }
    else if (opt.recursiveInArray == null) {
        opt.recursiveInArray = false;
    }
    return opt;
};
exports.isArrayObject = function (obj) {
    return obj != null && Array.isArray(obj);
};
exports.isValidObject = function (obj) {
    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
};
