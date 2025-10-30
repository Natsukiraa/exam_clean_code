import { describe,it,expect } from "vitest"
import { computeYamsSuite } from "."

describe('Yams basic suite tests', () => {
  it.each([
    [[1,1,1,2,3], 28],
    [[1,1,1,1,2], 35],
    [[1,1,1,2,2], 30],
    [[1,2,3,4,5], 40],
    [[5,5,5,5,5], 50],
    [[3,2,1,4,6], 18],
  ])("should return %s given %s", (input, expected) => {
    expect(computeYamsSuite(input)).toBe(expected);
  })
})