function calculateBowlingScore(frames: string): number {
  const separatesFrames = frames
    .replaceAll('-', '0')
    .split(' ')
    .flatMap((frame) => frame.split(''));
  return interpretSpares(separatesFrames)
    .map(Number)
    .reduce((a, b) => a + b);
}
function interpretSpares(frames: string[]): string[] {
  return frames.map((roll, index) => {
    if (roll === '/' && index < frames.length - 2) {
      roll = (
        10 -
        Number(frames[index - 1]) +
        Number(frames[index + 1])
      ).toString();
    }
    if (roll === '/') {
      roll = (10 - Number(frames[index - 1])).toString();
    }
    return roll;
  });
}

export {calculateBowlingScore};
