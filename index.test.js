import { describe,it,expect } from "vitest"
import { computeYamsScore, computeGameScore } from "."

describe('Yams basic suite tests', () => {
  it.each([
    [[1,1,1,2,3], 28], // BRELAN
    [[1,1,1,1,2], 35], // CARRE
    [[1,1,1,2,2], 30], // FULL
    [[1,2,3,4,5], 40], // SUITE
    [[5,5,5,5,5], 50], // YAMS
    [[3,2,1,4,6], 16], // CHANCE
  ])("should return %s given %s", (input, expected) => {
    expect(computeYamsScore(input)).toBe(expected);
  })
})

describe('Yams game tests', () => {
  it('should return 93 for Brelan / Carre / Full', () => {
    const rolls = [
      [2,2,2,3,4], 
      [5,5,5,5,1], 
      [1,1,1,2,2], 
    ];
    expect(computeGameScore(rolls)).toBe(93);
  })

  it('should return 108 for Suite / Yams / Chance', () => {
    const rolls = [
      [1,2,3,4,5], 
      [6,6,6,6,6], 
      [2,1,4,5,6], 
    ];
    expect(computeGameScore(rolls)).toBe(108);
  })

  it('should return 109 for Carre / Full / Brelan / Chance', () => {
    const rolls = [
      [4,4,4,4,2], 
      [3,3,3,5,5], 
      [6,6,6,1,2],
      [2,2,3,4,5],
    ];
    expect(computeGameScore(rolls)).toBe(109);
  })


  it('should return 0 for empty rolls', () => {
    const rolls = [];
    expect(computeGameScore(rolls)).toBe(0);
  })

  it('should throw error if dices are not valid', () => {
    const rolls = [
      [2,2,2,3,4], 
      [5,5,5,5,1,6], 
      [1,1,1,2,2], 
    ];
    expect(() => computeGameScore(rolls)).toThrow();
  })

  it('should throw error if dices are not valid', () => {
    const rolls = [
      [2,2,"b",3,4], 
      [5,5,5,5,1,"a"], 
      [1,2,9], 
    ];
    expect(() => computeGameScore(rolls)).toThrow();
  })
})