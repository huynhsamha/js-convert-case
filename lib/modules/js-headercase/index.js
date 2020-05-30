"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toHeaderCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
        .toLowerCase()
        .replace(/( ?)(\w+)( ?)/g, function (m, a, b, c) { return a + b.charAt(0).toUpperCase() + b.slice(1) + c; });
}
exports.default = toHeaderCase;
