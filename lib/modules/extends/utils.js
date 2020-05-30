"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObject = exports.DefaultOption = void 0;
exports.DefaultOption = {
    recursive: false,
};
exports.isValidObject = function (obj) {
    return obj != null && typeof obj === 'object' && !Array.isArray(obj);
};
