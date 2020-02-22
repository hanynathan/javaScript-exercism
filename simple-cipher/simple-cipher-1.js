const letters = 'abcdefghijklmnopqrstuvwxyz';
const len = letters.length;

const enc = (x, y) => x + y;
const dec = (x, y) => x - y;

const index = c => letters.indexOf(c);
const normalize = x => (x + len) % len;

const translate = (str, key, f) => {
  return str
    .split('')
    .map((c, i) => {
      const code = normalize(f(index(c), index(key[i])));
      return letters[code % letters.length];
    })
    .join('');
};

const generateKey = () => {
  return Array.from({ length: 100 }, () => letters.charAt(Math.floor(Math.random() * len))).join('');
};

module.exports = class Cipher {
  constructor(key) {
    if (typeof key === 'undefined') {
      key = generateKey();
    } else if (!key || !/^[a-z]+$/.test(key)) {
      throw new Error('Bad key');
    }
    this.key = key;
  }
  encode(str) {
    return translate(str, this.key, enc);
  }
  decode(str) {
    return translate(str, this.key, dec);
  }
};