import {
  hasDuplicateNames,
  hasEmptyString,
  isLengthLongerThanFive,
} from "./validators.js";
import { ERROR } from "../constants/messages.js";

export const validateCarNames = (carNamesArr) => {
  if (hasEmptyString(carNamesArr)) {
    throw new Error(ERROR.IS_CAR_NAME_EMPTY);
  }

  if (isLengthLongerThanFive(carNamesArr)) {
    throw new Error(ERROR.IS_LENGTH_LONGER_THAN_FIVE);
  }

  if (hasDuplicateNames(carNamesArr)) {
    throw new Error(ERROR.IS_DUPLICATE_CAR_NAME);
  }
};
