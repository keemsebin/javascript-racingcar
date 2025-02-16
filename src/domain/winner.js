import { findMaxValue } from "../utils/findMax.js";

export const findWinners = (playResult) => {
  const finalRound = playResult.at(-1);
  const maxPosition = findMaxValue(finalRound, "position");
  return finalRound.filter((car) => car.position === maxPosition);
};
