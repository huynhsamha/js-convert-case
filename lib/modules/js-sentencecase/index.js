"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toSentenceCase(str) {
    if (str === void 0) { str = ''; }
    if (!str)
        return '';
    var textcase = String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
        .replace(/([a-z])([A-Z])/g, function (m, a, b) { return a + "_" + b.toLowerCase(); })
        .replace(/[^A-Za-z0-9]+|_+/g, ' ')
        .toLowerCase();
    return textcase.charAt(0).toUpperCase() + textcase.slice(1);
}
exports.default = toSentenceCase;
