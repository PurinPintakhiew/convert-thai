import { numberFormat } from "./NumberConverter";

// --- interface
interface DateConstants {
  months: {
    full: string[];
    short: string[];
  };
  days: {
    full: string[];
    short: string[];
  };
}

type Era = "BE" | "CE" | "MS" | "JE" | "RE" | "HE"; // พ.ศ. (BE), ค.ศ. (CE), ม.ศ. (MS), จ.ศ. (JE), ร.ศ. (RE) และ ฮ.ศ. (HE)
type Locale = "th" | "us";

// --- TH
const dateThConstants: DateConstants = {
  months: {
    full: [
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
    short: [
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
  },
  days: {
    full: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    short: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
  },
};

// --- US
const dateConstants: DateConstants = {
  months: {
    full: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  days: {
    full: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

// --- Sub function
const dateSort = (
  defaultDate: any,
  format: string,
  locale: Locale = "th"
): string => {
  try {
    const formatDate: any = {
      dddd:
        locale === "th"
          ? dateThConstants.days.full[defaultDate.day]
          : dateConstants.days.full[defaultDate.day],
      ddd:
        locale === "th"
          ? dateThConstants.days.short[defaultDate.day]
          : dateConstants.days.short[defaultDate.day],
      dd:
        locale === "th"
          ? addZero(numberFormat(defaultDate.date), locale)
          : addZero(defaultDate.date.toString(), locale),
      d: defaultDate.date.toString(),
      mmmm:
        locale === "th"
          ? dateThConstants.months.full[defaultDate.month]
          : dateConstants.months.full[defaultDate.month],
      mmm:
        locale === "th"
          ? dateThConstants.months.short[defaultDate.month]
          : dateConstants.months.short[defaultDate.month],
      mm:
        locale === "th"
          ? addZero(numberFormat(defaultDate.month + 1), locale)
          : addZero((defaultDate.month + 1).toString(), locale),
      m: (defaultDate.month + 1).toString(),
      yyyy:
        locale === "th"
          ? numberFormat(defaultDate.year)
          : defaultDate.year.toString(),
      yy:
        locale === "th"
          ? addZero(numberFormat(defaultDate.year % 100), locale)
          : addZero((defaultDate.year % 100).toString(), locale),
      HH:
        locale === "th"
          ? addZero(numberFormat(defaultDate.hour), locale)
          : addZero(defaultDate.hour.toString(), locale),
      H: defaultDate.hour.toString(),
      MM:
        locale === "th"
          ? addZero(numberFormat(defaultDate.minute), locale)
          : addZero(defaultDate.minute.toString(), locale),
      M: defaultDate.minute.toString(),
      ss:
        locale === "th"
          ? addZero(numberFormat(defaultDate.second), locale)
          : addZero(defaultDate.second.toString(), locale),
      s: defaultDate.second.toString(),
    };

    return format.replace(
      /dddd|ddd|dd|d|mmmm|mmm|mm|m|yyyy|yy|HH|H|MM|M|ss|s/g,
      (match: any) => formatDate[match]
    );
  } catch (error) {
    console.error(error);
    return "";
  }
};

const addZero = (numberStr: string, locale: Locale = "th"): string => {
  try {
    if (!numberStr) {
      return "";
    }

    if (numberStr.length === 1) {
      return locale === "th" ? `๐${numberStr}` : `0${numberStr}`;
    }
    return numberStr;
  } catch (error) {
    console.error(error);
    return "";
  }
};

// --- Main function
const dateFormat = (
  date: any,
  format: string = "dd/mm/yyyy",
  era: Era = "BE",
  locale: Locale = "th"
): string => {
  try {
    if (!date || !format) return "";

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

    switch (era) {
      case "BE":
        defaultDate.year += 543;
        break;
      case "MS":
        defaultDate.year += 638;
        break;
      case "JE":
        defaultDate.year = defaultDate.year - 543 + 1;
        break;
      case "RE":
        defaultDate.year -= 1781;
        break;
      case "HE":
        defaultDate.year -= 622;
        break;
      default:
        break;
    }

    return dateSort(defaultDate, format, locale);
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { dateFormat, Era, Locale };
