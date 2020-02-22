const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const len = alphabet.length;

const generateKey = () => {
  return Array.from({ length: 100 }, alphabet.charAt(Math.floor(Math.random() * len))).join('');
};

module.exports = class Cipher {
  constructor(key = generateKey()) {
    this.key = key;

    const lowerCaseLetters = /^[a-z]+$/;
    if (!lowerCaseLetters.test(this.key)) {
      throw new Error('Bad key');
    }
  }

  // encode(plaintext) {
  //   const array = plaintext.split();
  //   const newArray = array.map(char => String.fromCharCode(char.charCodeAr(0) + 3));

  //   return newArray;
  // }

  // decode(encodedText) {
  //   const array = encodedText.split();
  //   const newArray = array.map(char => String.fromCharCode(char.charCodeAr(0) - 3));

  //   return newArray;
  // }


//   key() {

//   }
};
