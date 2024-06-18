import { dateFormat } from "./lib/DateConverter";
import { numberFormat } from "./lib/NumberConverter";
declare const convertThai: {
    dateFormat: (date: any, format?: string, type?: string, era?: string) => string;
    numberFormat: (number: number) => string;
};
export { dateFormat, numberFormat, convertThai };
