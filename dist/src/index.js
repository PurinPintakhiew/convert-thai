"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateConverter_1 = require("./lib/DateConverter");
const NumberConverter_1 = require("./lib/NumberConverter");
const convertThai = {
    dateFormat: DateConverter_1.default,
    numberFormat: NumberConverter_1.default,
};
exports.default = convertThai;
