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
};

const numberFormat = (number: number): string => {
  try {
    if (!number) {
      return "";
    }

    const numberArr: number[] = String(number)?.split("")?.map(Number) || [];

    if (numberArr.length > 0) {
      const numberStr: string =
        numberArr?.map((num: number) => numberThConstants[num])?.join("") || "";

      return numberStr;
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};

export default numberFormat;
