import { calculateBowlingScore } from "../src/main";

/**
 * TODO: Bowling kata
 * ! Do not check for valid rolls.
 * ! Do not check for correct number of rolls and frames.
 * ! Do not provide scores for intermediate frames.
 * * Add all simple points.
 * * Correctly interpret misses.
 * * Correctly interpret spares.
 * * Correctly interpret strikes.
 */

describe("Bowling kata should", () => {
  it("Add all simple points", () => {
    const game = "52 52 52 52 52 52 52 52 52 52";
    expect(calculateBowlingScore(game)).toBe(70);
  });

  it("Correctly interpret misses", () => {
    const game = "5- 5- 5- 5- 5- 5- 5- 5- 5- 5-";
    expect(calculateBowlingScore(game)).toBe(50);
  });

  it("Correctly interpret spares", () => {
    const game = "5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5";

    expect(calculateBowlingScore(game)).toBe(150);
  });

  it("Correctly interpret strikes", () => {
    const game = "x x x x x x x x x x x x";
    expect(calculateBowlingScore(game)).toBe(300);
  });

  it("Randoms bowlings play", () => {
    const game = "x x x 72 8/ 9- x 7/ 9- 5-";
    const game2 = "x 9/ 5/ 72 x x x 9- 8/ 9/ x";

    expect(calculateBowlingScore(game)).toBe(180);
    expect(calculateBowlingScore(game2)).toBe(187);
  });
});
