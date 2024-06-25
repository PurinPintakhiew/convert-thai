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

const bathText = (number: number): string => {
  try {
    if (number === null || typeof number === "undefined" || isNaN(number)) {
      return "";
    }
    
    return "";
  } catch (error) {
    console.error(error);
    return "";
  }
};
