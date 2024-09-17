import { dateFormat, Era } from "./lib/DateConverter";
import { numberFormat, ThousandsSeparator } from "./lib/NumberConverter";
import { bathText } from "./lib/BathTextConverter";
interface ConvertThai {
    bathText: (number: number) => string;
    dateFormat: (date: any, format?: string, era?: Era) => string;
    numberFormat: (number: number, decimals?: number, thousandsSeparator?: ThousandsSeparator) => string;
}
declare const convertThai: ConvertThai;
export { dateFormat, numberFormat, bathText, convertThai };
