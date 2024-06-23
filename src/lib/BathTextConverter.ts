interface BathConstants {
  numbers: string[];
  units: string[];
}

const bathConstants: BathConstants = {
  numbers: [],
  units: [],
};

const bathText = (number: number): string => {
  try {
    return "";
  } catch (error) {
    console.error(error);
    return "";
  }
};
