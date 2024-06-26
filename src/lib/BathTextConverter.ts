interface BathConstants {
  numbers: string[];
  units: string[];
}

const bathConstants: BathConstants = {
  numbers: [
    "",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า",
  ],
  units: ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"],
};

const numberToWord = (nums: number[]): string => {
  let ret: string = "";
  const len: number = nums.length;

  for (let i = 0; i < len; i++) {
    const digit: number = nums[i];
    const pos: number = len - i - 1;

    if (digit !== 0) {
      ret += bathConstants.numbers[digit] + bathConstants.units[pos % 6];
      if (pos % 6 === 0 && pos !== 0) {
        ret += bathConstants.units[6];
      }
    }
  }

  ret = ret.replace("หนึ่งสิบ", "สิบ");
  ret = ret.replace("สองสิบ", "ยี่สิบ");
  ret = ret.replace("สิบหนึ่ง", "สิบเอ็ด");

  return ret;
};

const bathText = (number: number): string => {
  try {
    if (number === null || typeof number === "undefined" || isNaN(number)) {
      return "";
    }

    if (number === 0) {
      return "ศูนย์บาทถ้วน";
    }

    const num: number = Math.abs(number);
    const numberStr: string = num.toFixed(2);
    const [integerPart, decimalPart] = numberStr.split(".");

    const integerArr: number[] = integerPart.split("").map(Number);
    const decimalArr: number[] = decimalPart.split("").map(Number);

    let bahtText: string = "";
    const length = integerArr.length;

    if (length > 6) {
      const millionsPart = integerArr.slice(0, length - 6);
      const thousandsPart = integerArr.slice(length - 6);

      bahtText += numberToWord(millionsPart) + bathConstants.units[6];
      bahtText += numberToWord(thousandsPart);
    } else {
      bahtText += numberToWord(integerArr);
    }

    bahtText += "บาท";
    if (decimalArr.length > 0 && decimalArr[0] !== 0) {
      bahtText += numberToWord(decimalArr) + "สตางค์";
    } else {
      bahtText += "ถ้วน";
    }

    return bahtText;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { bathText };
