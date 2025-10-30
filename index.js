export const FIGURE = {
  YAMS: 'yams',
  FULL: 'full',
  CARRE: 'carre',
  BRELAN: 'brelan',
  SUITE: 'suite',
  CHANCE: 'chance',
};

const FIGURES = {
  [FIGURE.YAMS]: 50,
  [FIGURE.FULL]: 30,
  [FIGURE.CARRE]: 35,
  [FIGURE.BRELAN]: 28,
  [FIGURE.SUITE]: 40,
  [FIGURE.CHANCE]: null,
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

export const computeYamsScore = (dices, usedFigures = new Set()) => {
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

  if(counts.includes(5) && !usedFigures.has(FIGURE.YAMS)) {
    usedFigures.add(FIGURE.YAMS);
    return FIGURES[FIGURE.YAMS];
  }
  if(counts.includes(2) && counts.includes(3) && !usedFigures.has(FIGURE.FULL)) {  
    usedFigures.add(FIGURE.FULL);
    return FIGURES[FIGURE.FULL];
  }
  if(counts.includes(4) && !usedFigures.has(FIGURE.CARRE)) {
    usedFigures.add(FIGURE.CARRE);
    return FIGURES[FIGURE.CARRE];
  }
  if(counts.includes(3) && !usedFigures.has(FIGURE.BRELAN)) {
    usedFigures.add(FIGURE.BRELAN);
    return FIGURES[FIGURE.BRELAN];
  }
  if(isSuite(dices) && !usedFigures.has(FIGURE.SUITE)) {
    usedFigures.add(FIGURE.SUITE);
    return FIGURES[FIGURE.SUITE];
  }

  if(!usedFigures.has(FIGURE.CHANCE)) {
    usedFigures.add(FIGURE.CHANCE);
    return dices.reduce((a,b) => a + b, 0);
  }

  return 0;
  
}

export const computeGameScore = (dicesThrows) => {
  let totalScore = 0;
  let usedFigures = new Set();
  try {
    dicesThrows.forEach((diceThrow) => {
        totalScore += computeYamsScore(diceThrow, usedFigures);
    });
  } catch (e) {
    throw new Error('Invalid dice throw');
  }

  return totalScore
}