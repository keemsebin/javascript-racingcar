import { CAR_PROPERTY } from "../constants/race.js";
import { findMaxValue } from "../utils/findMax.js";

export const findWinners = (playResult) => {
  const finalRound = playResult.at(-1);
  const maxPosition = findMaxValue(finalRound, CAR_PROPERTY.POSITION);
  return finalRound.filter((car) => car.position === maxPosition);
};
