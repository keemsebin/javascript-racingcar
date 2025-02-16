import { isNumberZero } from "./validators.js";
import { ERROR } from "../constants/messages.js";

export const validateCount = (number) => {
  if (isNumberZero(number)) {
    throw new Error(ERROR.IS_NOT_ZERO);
  }

  if (isNaN(number)) {
    throw new Error(ERROR.IS_NOT_NUMBER);
  }

  if (number === "") {
    throw new Error(ERROR.IS_TRY_COUNT_EMPTY);
  }
};
