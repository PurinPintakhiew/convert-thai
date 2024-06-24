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
    fullDays: [
        "อาทิตย์",
        "จันทร์",
        "อังคาร",
        "พุธ",
        "พฤหัสบดี",
        "ศุกร์",
        "เสาร์",
    ],
    shortDays: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
};
const dateFormat = (date, format = "dd/mm/yyyy", era = "be") => {
    try {
        if (!date || !format) {
            return "";
        }
        const newDate = new Date(date);
        const defaultDate = {
            day: newDate.getDay(),
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
        else if (era === "ad") {
            defaultDate.year = newDate.getFullYear();
        }
        else {
            defaultDate.year = defaultDate.year + 543;
        }
        const result = dateSort(defaultDate, format);
        return result;
    }
    catch (error) {
        console.error(error);
        return "";
    }
};
exports.dateFormat = dateFormat;
const dateSort = (defaultDate, format) => {
    try {
        const formatDate = {
            dddd: dateThConstants.fullDays[defaultDate.day],
            ddd: dateThConstants.shortDays[defaultDate.day],
            dd: addZero((0, NumberConverter_1.numberFormat)(defaultDate.date)),
            d: (0, NumberConverter_1.numberFormat)(defaultDate.date),
            mmmm: dateThConstants.fulls[defaultDate.month],
            mmm: dateThConstants.shorts[defaultDate.month],
            mm: addZero((0, NumberConverter_1.numberFormat)(defaultDate.month + 1)),
            m: (0, NumberConverter_1.numberFormat)(defaultDate.month + 1),
            yyyy: (0, NumberConverter_1.numberFormat)(defaultDate.year),
            yy: addZero((0, NumberConverter_1.numberFormat)(defaultDate.year % 100)),
            HH: addZero((0, NumberConverter_1.numberFormat)(defaultDate.hour)),
            H: (0, NumberConverter_1.numberFormat)(defaultDate.hour),
            MM: addZero((0, NumberConverter_1.numberFormat)(defaultDate.minute)),
            M: (0, NumberConverter_1.numberFormat)(defaultDate.minute),
            ss: addZero((0, NumberConverter_1.numberFormat)(defaultDate.second)),
            s: (0, NumberConverter_1.numberFormat)(defaultDate.second),
        };
        return format.replace(/dddd|ddd|dd|d|mmmm|mmm|mm|m|yyyy|yy|HH|H|MM|M|ss|s/g, (match) => formatDate[match] || "");
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
