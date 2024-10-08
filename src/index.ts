import { dateFormat, Era, Locale } from "./lib/DateConverter";
import { numberFormat, ThousandsSeparator } from "./lib/NumberConverter";
import { bathText } from "./lib/BathTextConverter";

interface ConvertThai {
  bathText: (number: number) => string;
  dateFormat: (
    date: Date | string,
    format?: string,
    era?: Era,
    locale?: Locale
  ) => string;
  numberFormat: (
    number: number,
    decimals?: number,
    thousandsSeparator?: ThousandsSeparator
  ) => string;
}

const convertThai: ConvertThai = {
  dateFormat,
  numberFormat,
  bathText,
};

export { dateFormat, numberFormat, bathText, convertThai };
