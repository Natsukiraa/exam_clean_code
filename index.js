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

  if(counts.includes(2) && counts.includes(3)) return 30;
  if(counts.includes(4)) return 35;
  if(counts.includes(3)) return 28;
  
}