const isSuite = (dices) => {
  const sortedDices = dices.sort();
  const suite1 = [1,2,3,4,5];
  const suite2 = [2,3,4,5,6];

  for (let i = 0; i < sortedDices.length; i++) {
    if (sortedDices[i] !== suite1[i] && sortedDices[i] !== suite2[i]) {
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
  
  
}