//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const randomKeyBaseLength = alphabet.length;
const lowerCaseLetters = /^[a-z]+$/;
const [encode, decode] = [Symbol(), Symbol()];

const isValidKey = (key) => {
	if (!lowerCaseLetters.test(key)) {
	  throw new Error('Bad key');
	}
}

export class Cipher {
	constructor(key) {
		this.key = key ? key : this.randomKeyGenerator();
		isValidKey(this.key);
	}
	
	keyIndex(letter){
		return alphabet.indexOf(letter);
	}

	randomKeyGenerator() {
		return Array.from({ length: 100 }, () => alphabet.charAt(Math.floor(Math.random() * randomKeyBaseLength))).join('');
	}

	cipherMethod(plaintext, method){
		const array = plaintext.split('');
		const newArray = array.map((char, index) => {
			const charIndex = alphabet.indexOf(char);
			const keyInd = this.keyIndex(this.key[index % this.key.length]);
			
			const x = method === encode ? 
								(charIndex + keyInd) 
								: (charIndex - keyInd);
			
			return alphabet.charAt((x + randomKeyBaseLength)%randomKeyBaseLength);
		}); 

		return newArray.join('');
	}

	encode(plaintext) {
		return this.cipherMethod(plaintext, encode);
	}
  
	decode(encodedText) {
		return this.cipherMethod(encodedText, decode);
	}
}
		