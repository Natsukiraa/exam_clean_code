export const computeYamsSuite = (dices) => {
  let identicalCount = 0;

  for (let i = 0; i < dices.length; i++) {
    let count = 0;
    for (let j = 0; j < dices.length; j++) {
      if (dices[i] === dices[j]) {
        count++;
      }
    }
    if (count > identicalCount) {
      identicalCount = count;
    }
  }

  if(identicalCount == 3) {
    return 28;
  } else if (identicalCount == 4) {
    return 35;
  }
}