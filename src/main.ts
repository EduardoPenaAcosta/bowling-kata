function calculateBowlingScore(frames: string): number {
  const separatesFrames = frames
    .replaceAll("-", "0")
    .split(" ")
    .flatMap((frame) => frame.split(""));

  return interpretedFrames(separatesFrames)
    .map(Number)
    .reduce((a, b) => a + b);
}
function interpretedFrames(frames: string[]): string[] {
  return frames.map((roll, index) => {
    if (roll.includes("/")) {
      return interpretedSpares(frames, index);
    }

    if (roll === "x" && index < frames.length - 2) {
      let nextRoll = frames[index + 1];
      let plusNextRoll = frames[index + 2];
      
      if (nextRoll.includes("/")) {
        nextRoll = interpretedSpares(frames, index);
      }

      if (plusNextRoll.includes("/")) {
        plusNextRoll = interpretedSpares(frames, index);
      }

      roll = (
        10 +
        parseStrikeToNumber(nextRoll) +
        parseStrikeToNumber(plusNextRoll)
      ).toString();
    }

    if (roll === "x") {
      roll = (10 - parseStrikeToNumber(frames[index - 1])).toString();
    }

    return roll;
  });
}
function interpretedSpares(frames: string[], index: number): string {
  console.log(frames)

  if (index < frames.length - 2 && index > 0) {
    return (
      10 -
      Number(frames[index - 1]) +
      Number(frames[index + 1])
    ).toString();
    }
  return (10 - Number(frames[index - 1])).toString();
}

function parseStrikeToNumber(roll: string): number {
  return parseInt(roll.replace("x", "10"));
}

export { calculateBowlingScore };
