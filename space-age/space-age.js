//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const solarYears = {
'mercury': 0.2408467,
'venus': 0.61519726,
'earth': 1,
'mars': 1.8808158,
'jupiter': 11.862615,
'saturn': 29.447498,
'uranus': 84.016846,
'neptune': 164.79132
};

const earthSeconds = 365.25*24*60*60;

export const age = (planet, agePerSeconds) => {
  const earthYear = solarYears[planet];
  const spaceAge = agePerSeconds / (earthYear * earthSeconds);
  return Math.round(spaceAge * 100) / 100;
};
