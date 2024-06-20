import { dateFormat } from "./lib/DateConverter";
import { numberFormat } from "./lib/NumberConverter";
declare const convertThai: {
    dateFormat: (date: any, format?: string, type?: string, era?: string) => string;
    numberFormat: (number: number, decimals?: number | undefined, thousandsSeparator?: string | undefined) => string;
};
export { dateFormat, numberFormat, convertThai };
