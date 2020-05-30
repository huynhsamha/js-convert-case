"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toDotCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, '.')
        .toLowerCase();
}
exports.default = toDotCase;
