import { RACE_MOVE } from "../constants/race.js";
import { getRandomNumber } from "../utils/random.js";

export const getNextCarPosition = (position) => {
  const randomNumber = getRandomNumber();
  if (randomNumber >= RACE_MOVE.THRESHOLD) {
    return position + 1;
  }
  return position;
};

export const updateCarPosition = (car, moveResult) => ({
  ...car,
  position: moveResult,
});

export const moveCarForward = (car) => {
  const newPosition = getNextCarPosition(car.position);
  return updateCarPosition(car, newPosition);
};

export const playRounds = (cars) => {
  return cars.map((car) => moveCarForward(car));
};

export const playRacing = (initialCars, tryCount) => {
  return Array.from({ length: tryCount }).reduce((rounds) => {
    const newRound = playRounds(rounds.at(-1) || initialCars);
    return [...rounds, newRound];
  }, []);
};
