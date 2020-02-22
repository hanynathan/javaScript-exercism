//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let len = alphabet.length;

export class Cipher {
	constructor(key) {
		if(key){
			this.key = key;
		}else{
			this.key = this.randomKeyGenerator();
		}

		const lowerCaseLetters = /^[a-z]+$/;
		if (!lowerCaseLetters.test(this.key)) {
		  throw new Error('Bad key');
		}
	}
  
	keyIndex(letter){
		return alphabet.indexOf(letter);
	}

	randomKeyGenerator() {
		return Array.from({ length: 100 }, () => alphabet.charAt(Math.floor(Math.random() * len))).join('');
	}

	encode(plaintext) {
		const array = plaintext.split('');
		const newArray = array.map((char, index) => {
			const x = alphabet.indexOf(char) + this.keyIndex(this.key[index % this.key.length]);
			
			return alphabet.charAt((x + len)%len);
		}); 

		return newArray.join('');
	}
  
	decode(encodedText) {
		const array = encodedText.split('');
		const newArray = array.map((char, index) => {
			const x = alphabet.indexOf(char) - this.keyIndex(this.key[index % this.key.length]);
			
			return alphabet.charAt((x + len)%len);
		});

		return newArray.join('');
	}
  
}
		