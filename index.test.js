import { describe,it,expect } from "vitest"
import { computeYamsSuite, computeGameScore } from "."

describe('Yams basic suite tests', () => {
  it.each([
    [[1,1,1,2,3], 28], // BRELAN
    [[1,1,1,1,2], 35], // CARRE
    [[1,1,1,2,2], 30], // FULL
    [[1,2,3,4,5], 40], // SUITE
    [[5,5,5,5,5], 50], // YAMS
    [[3,2,1,4,6], 16], // CHANCE
  ])("should return %s given %s", (input, expected) => {
    expect(computeYamsSuite(input)).toBe(expected);
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
})