import { numberFormat } from "./NumberConverter";

interface DateThConstants {
  fulls: string[];
  shorts: string[];
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
};

const dateFormat = (
  date: any,
  format: string = "dd/mm/yy",
  type: string = "number" || "short" || "full",
  era: string = "be" || "ad"
): string => {
  try {
    if (!date || !format || !type || !era) {
      return "";
    }

    const newDate: any = new Date(date);

    const defaultDate: any = {
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

    let dateTh: any = {
      date: numberFormat(defaultDate.date),
      month: defaultDate.month,
      year: numberFormat(defaultDate.year),
      hour: numberFormat(defaultDate.hour),
      minute: numberFormat(defaultDate.minute),
      second: numberFormat(defaultDate.second),
    };

    switch (type) {
      case "number":
        dateTh.month = numberFormat(defaultDate.month + 1);
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

    const result: string = dateSort(dateTh, format);

    return result;
  } catch (error) {
    console.error(error);
    return "";
  }
};

const dateSort = (dateTh: any, format: string): string => {
  try {
    const formatDate: any = {
      dd: dateTh.date,
      mm: dateTh.month,
      yy: dateTh.year,
      h: dateTh.hour,
      m: dateTh.minute,
      s: dateTh.second,
    };

    return format.replace(
      /dd|mm|yy|h|m|s/g,
      (match: any) => formatDate[match] || ""
    );
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { dateFormat };
