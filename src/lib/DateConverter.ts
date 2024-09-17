import { numberFormat } from "./NumberConverter";

interface DateThConstants {
  fulls: string[];
  shorts: string[];
  fullDays: string[];
  shortDays: string[];
}

const dateThConstants: DateThConstants = {
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

/*
  พ.ศ. (BE), ค.ศ. (CE), ม.ศ. (MS), จ.ศ. (JE), ร.ศ. (RE) และ ฮ.ศ. (HE)
*/

type Era = "BE" | "CE" | "MS" | "JE" | "RE" | "HE";

const dateFormat = (
  date: any,
  format: string = "dd/mm/yyyy",
  era: Era = "BE"
): string => {
  try {
    if (!date || !format) {
      return "";
    }

    const newDate: any = new Date(date);

    const defaultDate: any = {
      day: newDate.getDay(),
      date: newDate.getDate(),
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
      hour: newDate.getHours(),
      minute: newDate.getMinutes(),
      second: newDate.getSeconds(),
    };

    if (era === "BE") {
      defaultDate.year = newDate.getFullYear() + 543;
    } else if (era === "CE") {
      defaultDate.year = newDate.getFullYear();
    } else if (era === "MS") {
      defaultDate.year = newDate.getFullYear() + 638;
    } else if (era === "JE") {
      defaultDate.year = newDate.getFullYear() - 543 + 1;
    } else if (era === "RE") {
      defaultDate.year = newDate.getFullYear() - 1781;
    } else if (era === "HE") {
      defaultDate.year = newDate.getFullYear() - 622;
    } else {
      defaultDate.year = newDate.getFullYear() + 543;
    }

    const result: string = dateSort(defaultDate, format);

    return result;
  } catch (error) {
    console.error(error);
    return "";
  }
};

const dateSort = (defaultDate: any, format: string): string => {
  try {
    const formatDate: any = {
      dddd: dateThConstants.fullDays[defaultDate.day],
      ddd: dateThConstants.shortDays[defaultDate.day],
      dd: addZero(numberFormat(defaultDate.date)),
      d: numberFormat(defaultDate.date),
      mmmm: dateThConstants.fulls[defaultDate.month],
      mmm: dateThConstants.shorts[defaultDate.month],
      mm: addZero(numberFormat(defaultDate.month + 1)),
      m: numberFormat(defaultDate.month + 1),
      yyyy: numberFormat(defaultDate.year),
      yy: addZero(numberFormat(defaultDate.year % 100)),
      HH: addZero(numberFormat(defaultDate.hour)),
      H: numberFormat(defaultDate.hour),
      MM: addZero(numberFormat(defaultDate.minute)),
      M: numberFormat(defaultDate.minute),
      ss: addZero(numberFormat(defaultDate.second)),
      s: numberFormat(defaultDate.second),
    };

    return format.replace(
      /dddd|ddd|dd|d|mmmm|mmm|mm|m|yyyy|yy|HH|H|MM|M|ss|s/g,
      (match: any) => formatDate[match] || ""
    );
  } catch (error) {
    console.error(error);
    return "";
  }
};

const addZero = (numberStr: string): string => {
  try {
    if (!numberStr) {
      return "";
    }

    if (numberStr?.length == 1) {
      return `๐${numberStr}`;
    }

    return numberStr;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { dateFormat, Era };
