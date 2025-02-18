import { INPUT, OUTPUT } from "./constants/messages.js";
import { DELIMITER } from "./constants/race.js";
import { createCars } from "./domain/car.js";
import { playRacing } from "./domain/play.js";
import { findWinners } from "./domain/winner.js";
import { splitByDelimiter } from "./utils/split.js";
import { validateCarNames } from "./validation/carNameValidate.js";
import { validateCount } from "./validation/tryCountValidate.js";
import { readLineAsync, retryInput } from "./view/input.js";
import { print, printProcess, printWinners } from "./view/output.js";

async function run() {
  const carNames = await retryInput(async () => {
    const getCarNamesInput = await readLineAsync(INPUT.CAR_NAMES);
    const carNames = splitByDelimiter(getCarNamesInput, DELIMITER);
    validateCarNames(carNames);
    return carNames;
  });

  const tryCount = await retryInput(async () => {
    const getTryCount = await readLineAsync(INPUT.TRY_COUNT);
    validateCount(getTryCount);
    return Number(getTryCount);
  });

  const cars = createCars(carNames);

  print(OUTPUT.RESULT);
  const playResult = playRacing(cars, tryCount);
  playResult.forEach(printProcess);

  const winners = findWinners(playResult);
  printWinners(winners);
}

run();
