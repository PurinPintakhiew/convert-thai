import { dateFormat } from "./lib/DateConverter";
import { numberFormat } from "./lib/NumberConverter";
import { bathText } from "./lib/BathTextConverter";
declare const convertThai: {
    dateFormat: (date: any, format?: string, era?: "be" | "ad") => string;
    numberFormat: (number: number, decimals?: number | undefined, thousandsSeparator?: "," | undefined) => string;
    bathText: (number: number) => string;
};
export { dateFormat, numberFormat, bathText, convertThai };
