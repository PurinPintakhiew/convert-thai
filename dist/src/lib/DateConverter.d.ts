type Era = "BE" | "CE" | "MS" | "JE" | "RE" | "HE";
declare const dateFormat: (date: any, format?: string, era?: Era) => string;
export { dateFormat, Era };
