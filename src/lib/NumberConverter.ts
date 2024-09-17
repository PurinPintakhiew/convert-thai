const numberThConstants: any = {
  0: "๐",
  1: "๑",
  2: "๒",
  3: "๓",
  4: "๔",
  5: "๕",
  6: "๖",
  7: "๗",
  8: "๘",
  9: "๙",
  ".": ".",
  ",": ",",
  "-": "-",
};

type ThousandsSeparator = ",";

const numberFormat = (
  number: number,
  decimals?: number,
  thousandsSeparator?: ThousandsSeparator
): string => {
  try {
    if (number === null || typeof number === "undefined" || isNaN(number)) {
      return "";
    }

    let num: number = Number(number);
    let numberStr: string = String(num);

    if (decimals || decimals === 0) {
      const decimal: number = Math.floor(Math.abs(decimals));
      numberStr = ((num * 100) / 100)?.toFixed(decimal);
    }

    if (thousandsSeparator === ",") {
      const [integerPart, decimalPart] = numberStr?.split(".");

      numberStr = integerPart?.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        thousandsSeparator
      );

      if (decimalPart) {
        numberStr = `${numberStr}.${decimalPart}`;
      }
    }

    const numberArr: any[] =
      numberStr
        ?.split("")
        ?.map((n: any) =>
          n === "." || n === "," || n === "-" ? n : Number(n)
        ) || [];

    if (numberArr.length > 0) {
      const numberThai: string =
        numberArr?.map((num: any) => numberThConstants[num])?.join("") || "";

      return numberThai;
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { numberFormat, ThousandsSeparator };
