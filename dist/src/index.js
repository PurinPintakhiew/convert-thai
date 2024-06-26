"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertThai = exports.bathText = exports.numberFormat = exports.dateFormat = void 0;
const DateConverter_1 = require("./lib/DateConverter");
Object.defineProperty(exports, "dateFormat", { enumerable: true, get: function () { return DateConverter_1.dateFormat; } });
const NumberConverter_1 = require("./lib/NumberConverter");
Object.defineProperty(exports, "numberFormat", { enumerable: true, get: function () { return NumberConverter_1.numberFormat; } });
const BathTextConverter_1 = require("./lib/BathTextConverter");
Object.defineProperty(exports, "bathText", { enumerable: true, get: function () { return BathTextConverter_1.bathText; } });
const convertThai = {
    dateFormat: DateConverter_1.dateFormat,
    numberFormat: NumberConverter_1.numberFormat,
    bathText: BathTextConverter_1.bathText,
};
exports.convertThai = convertThai;
