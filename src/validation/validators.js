import { CAR_NAME, MIN_TRY_COUNT_NUM } from "../constants/race.js";

export const hasEmptyString = (arr) => {
  return arr.some((item) => item === "");
};

export const isLengthLongerThanFive = (arr) => {
  return arr.some((item) => item.length > CAR_NAME.MAX_LENGTH);
};

export const isNumberZero = (number) => {
  return Number(number) === MIN_TRY_COUNT_NUM;
};

export const hasDuplicateNames = (arr) => {
  return new Set(arr).size !== arr.length;
};
