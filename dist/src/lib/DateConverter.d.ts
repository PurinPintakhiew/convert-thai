type Era = "BE" | "CE" | "MS" | "JE" | "RE" | "HE";
type Locale = "th" | "us";
declare const dateFormat: (date: any, format?: string, era?: Era, locale?: Locale) => string;
export { dateFormat, Era, Locale };
