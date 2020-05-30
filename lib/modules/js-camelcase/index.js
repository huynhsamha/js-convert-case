"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toCamelCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "$" + b; })
        .toLowerCase()
        .replace(/(\$)(\w)/g, function (m, a, b) { return b.toUpperCase(); });
}
exports.default = toCamelCase;
