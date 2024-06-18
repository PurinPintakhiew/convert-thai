"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertThai = exports.numberFormat = exports.dateFormat = void 0;
const DateConverter_1 = require("./lib/DateConverter");
Object.defineProperty(exports, "dateFormat", { enumerable: true, get: function () { return DateConverter_1.dateFormat; } });
const NumberConverter_1 = require("./lib/NumberConverter");
Object.defineProperty(exports, "numberFormat", { enumerable: true, get: function () { return NumberConverter_1.numberFormat; } });
const convertThai = {
    dateFormat: DateConverter_1.dateFormat,
    numberFormat: NumberConverter_1.numberFormat,
};
exports.convertThai = convertThai;
