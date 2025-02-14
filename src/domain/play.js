import { MAX_MOVABLE_NUMBER } from "../constants/race.js";
import { getMaxPosition } from "../utils/findMax.js";
import { getRandomNumber } from "../utils/random.js";

export const isMoveValid = (randomNum) => {
  return randomNum >= MAX_MOVABLE_NUMBER;
};

export const playRound = (cars) => {
  return cars.map((car) => {
    const randomNum = getRandomNumber();
    if (isMoveValid(randomNum)) {
      return { ...car, position: car.position + 1 };
    }
    return car;
  });
};

export const playRacing = (cars, tryCount) => {
  return Array.from({ length: tryCount }).reduce((rounds, _) => {
    const newRound = playRound(rounds[rounds.length - 1] || cars);
    return [...rounds, newRound];
  }, []);
};

export const getWinnersByPosition = (cars) => {
  const carPlayResult = cars.at(-1);
  const maxPosition = getMaxPosition(carPlayResult);
  return carPlayResult.filter((car) => car.position === maxPosition);
};
