"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberFormat = void 0;
const numberThConstants = {
    0: "๐",
    1: "๑",
    2: "๒",
    3: "๓",
    4: "๔",
    5: "๕",
    6: "๖",
    7: "๗",
    8: "๘",
    9: "๙",
    ".": ".",
    ",": ",",
};
const numberFormat = (number, decimals, thousandsSeparator) => {
    var _a, _b;
    try {
        if (number === null || typeof number === "undefined" || isNaN(number)) {
            return "";
        }
        let num = number || 0;
        if (decimals || decimals === 0) {
            num = Number(number === null || number === void 0 ? void 0 : number.toFixed(decimals));
        }
        let numberStr = String(num);
        if (thousandsSeparator) {
            const [integerPart, decimalPart] = numberStr === null || numberStr === void 0 ? void 0 : numberStr.split(".");
            numberStr = integerPart === null || integerPart === void 0 ? void 0 : integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
            if (decimalPart) {
                numberStr = `${numberStr}.${decimalPart}`;
            }
        }
        const numberArr = ((_a = numberStr === null || numberStr === void 0 ? void 0 : numberStr.split("")) === null || _a === void 0 ? void 0 : _a.map((n) => (n === "." || n === "," ? n : Number(n)))) || [];
        if (numberArr.length > 0) {
            const numberThai = ((_b = numberArr === null || numberArr === void 0 ? void 0 : numberArr.map((num) => numberThConstants[num])) === null || _b === void 0 ? void 0 : _b.join("")) || "";
            return numberThai;
        }
        else {
            return "";
        }
    }
    catch (error) {
        console.error(error);
        return "";
    }
};
exports.numberFormat = numberFormat;
