"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
};
const numberFormat = (number) => {
    var _a, _b, _c;
    try {
        if (!number) {
            return "";
        }
        const numberArr = ((_b = (_a = String(number)) === null || _a === void 0 ? void 0 : _a.split("")) === null || _b === void 0 ? void 0 : _b.map(Number)) || [];
        if (numberArr.length > 0) {
            const numberStr = ((_c = numberArr === null || numberArr === void 0 ? void 0 : numberArr.map((num) => numberThConstants[num])) === null || _c === void 0 ? void 0 : _c.join("")) || "";
            return numberStr;
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
exports.default = numberFormat;
