import { dateFormat } from "./lib/DateConverter";
import { numberFormat } from "./lib/NumberConverter";
declare const convertThai: {
    dateFormat: (date: any, format?: string, era?: "be" | "ad") => string;
    numberFormat: (number: number, decimals?: number | undefined, thousandsSeparator?: "," | undefined) => string;
};
export { dateFormat, numberFormat, convertThai };
