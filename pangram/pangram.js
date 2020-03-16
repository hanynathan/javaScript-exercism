//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const validLetters = /^[A-Za-z1-9_."]+$/;

export const isPangram = (input) => {
  // return [...'abcdefghijklmnopqrstuvwxyz'].every(char => input.toLowerCase().includes(char))

  const inputNoSpace = input.replace(/\s/g, '');
  if(inputNoSpace.length == 0 || !inputNoSpace.match(validLetters)){
    return false;
  }

  for(let i = 0; i < alphabet.length; i++){
    if(!inputNoSpace.toLowerCase().includes(alphabet.charAt(i))){
      return false;
    }
  }
  
  return true;
};