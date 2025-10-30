const isSuite = (dices) => {
  const sortedDices = [...dices].sort((a, b) => a - b);

  for (let i = 1; i < sortedDices.length; i++) {
    if (sortedDices[i] !== sortedDices[i - 1] + 1) {
      return false;
    }
  }

  return true;
}

export const computeYamsSuite = (dices) => {
  if(dices.length !== 5) {
    throw new Error('Invalid number of dices');
  }
  let dicesValues = {};

  dices.forEach((dice) => {
    if(typeof dice !== 'number' || dice < 1 || dice > 6) {
      throw new Error('Invalid dice value');
    }
    if (dicesValues[dice]) {
      dicesValues[dice] += 1;
    } else {
      dicesValues[dice] = 1;
    }
  })

  const counts = Object.values(dicesValues);

  if(counts.includes(5)) return 50;
  if(counts.includes(2) && counts.includes(3)) return 30;
  if(counts.includes(4)) return 35;
  if(counts.includes(3)) return 28;
  if(isSuite(dices)) return 40;
  
  return dices.reduce((a,b) => a + b, 0);
  
}

export const computeGameScore = (dicesThrows) => {
  let totalScore = 0;
  try {
    dicesThrows.forEach((diceThrow) => {
        totalScore += computeYamsSuite(diceThrow);
    });
  } catch (e) {
    throw new Error('Invalid dice throw');
  }

  return totalScore
}