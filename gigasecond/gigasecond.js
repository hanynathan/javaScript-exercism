//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Math.pow(10,9) * 1000 = 1e9 * 1000 = 1e12
//to convert seconds to milliseconds as getTime() return milliseconds
const gSeconds = 1e12;
export const gigasecond = (input) => {
  const gsDateSeconds = input.getTime() + gSeconds;
  return new Date(gsDateSeconds);
};