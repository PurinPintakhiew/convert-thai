"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
const NumberConverter_1 = require("./NumberConverter");
const dateThConstants = {
    fulls: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
    ],
    shorts: [
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
    ],
};
const dateFormat = (date, format = "dd/mm/yy", type = "number" || "short" || "full", era = "be" || "ad") => {
    try {
        if (!date || !format || !type || !era) {
            return "";
        }
        const newDate = new Date(date);
        const defaultDate = {
            date: newDate.getDate(),
            month: newDate.getMonth(),
            year: newDate.getFullYear(),
            hour: newDate.getHours(),
            minute: newDate.getMinutes(),
            second: newDate.getSeconds(),
        };
        if (era === "be") {
            defaultDate.year = defaultDate.year + 543;
        }
        let dateTh = {
            date: addZero((0, NumberConverter_1.numberFormat)(defaultDate.date)),
            month: defaultDate.month,
            year: addZero((0, NumberConverter_1.numberFormat)(defaultDate.year)),
            hour: addZero((0, NumberConverter_1.numberFormat)(defaultDate.hour)),
            minute: addZero((0, NumberConverter_1.numberFormat)(defaultDate.minute)),
            second: addZero((0, NumberConverter_1.numberFormat)(defaultDate.second)),
        };
        switch (type) {
            case "number":
                dateTh.month = addZero((0, NumberConverter_1.numberFormat)(defaultDate.month + 1));
                break;
            case "full":
                dateTh.month = dateThConstants.fulls[defaultDate.month];
                break;
            case "short":
                dateTh.month = dateThConstants.shorts[defaultDate.month];
                break;
            default:
                break;
        }
        const result = dateSort(dateTh, format);
        return result;
    }
    catch (error) {
        console.error(error);
        return "";
    }
};
exports.dateFormat = dateFormat;
const dateSort = (dateTh, format) => {
    try {
        const formatDate = {
            dd: dateTh.date,
            mm: dateTh.month,
            yy: dateTh.year,
            h: dateTh.hour,
            m: dateTh.minute,
            s: dateTh.second,
        };
        return format.replace(/dd|mm|yy|h|m|s/g, (match) => formatDate[match] || "");
    }
    catch (error) {
        console.error(error);
        return "";
    }
};
const addZero = (numberStr) => {
    try {
        if (!numberStr) {
            return "";
        }
        if ((numberStr === null || numberStr === void 0 ? void 0 : numberStr.length) == 1) {
            return `๐${numberStr}`;
        }
        return numberStr;
    }
    catch (error) {
        console.error(error);
        return "";
    }
};