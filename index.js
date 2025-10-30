export const Figure = {
  YAMS: 'yams',
  FULL: 'full',
  CARRE: 'carre',
  BRELAN: 'brelan',
  SUITE: 'suite',
  CHANCE: 'chance',
};

const figures = {
  [Figure.YAMS]: 50,
  [Figure.FULL]: 30,
  [Figure.CARRE]: 35,
  [Figure.BRELAN]: 28,
  [Figure.SUITE]: 40,
  [Figure.CHANCE]: null,
};



const isSuite = (dices) => {
  const sortedDices = [...dices].sort((a, b) => a - b);

  for (let i = 1; i < sortedDices.length; i++) {
    if (sortedDices[i] !== sortedDices[i - 1] + 1) {
      return false;
    }
  }

  return true;
}

export const computeYamsSuite = (dices, alreadyUsedFigures = new Set()) => {
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

  if(counts.includes(5) && !alreadyUsedFigures.has(Figure.YAMS)) {
    alreadyUsedFigures.add(Figure.YAMS);
    return figures[Figure.YAMS];
  }
  if(counts.includes(2) && counts.includes(3) && !alreadyUsedFigures.has(Figure.FULL)) {  
    alreadyUsedFigures.add(Figure.FULL);
    return figures[Figure.FULL];
  }
  if(counts.includes(4) && !alreadyUsedFigures.has(Figure.CARRE)) {
    alreadyUsedFigures.add(Figure.CARRE);
    return figures[Figure.CARRE];
  }
  if(counts.includes(3) && !alreadyUsedFigures.has(Figure.BRELAN)) {
    alreadyUsedFigures.add(Figure.BRELAN);
    return figures[Figure.BRELAN];
  }
  if(isSuite(dices) && !alreadyUsedFigures.has(Figure.SUITE)) {
    alreadyUsedFigures.add(Figure.SUITE);
    return figures[Figure.SUITE];
  }

  if(!alreadyUsedFigures.has(Figure.CHANCE)) {
    alreadyUsedFigures.add(Figure.CHANCE);
    return dices.reduce((a,b) => a + b, 0);
  }

  return 0;
  
}

export const computeGameScore = (dicesThrows) => {
  let totalScore = 0;
  let alreadyUsedFigures = new Set();
  try {
    dicesThrows.forEach((diceThrow) => {
        totalScore += computeYamsSuite(diceThrow, alreadyUsedFigures);
    });
  } catch (e) {
    throw new Error('Invalid dice throw');
  }

  return totalScore
}