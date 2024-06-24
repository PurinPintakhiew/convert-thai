type era = "be" | "ad";
declare const dateFormat: (date: any, format?: string, era?: era) => string;
export { dateFormat };
