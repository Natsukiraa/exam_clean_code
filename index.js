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
  let dicesValues = {};

  dices.forEach((dice) => {
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