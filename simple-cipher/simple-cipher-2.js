class Cipher {
    constructor(suppliedKey) {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
        this.key = this.isValid(suppliedKey) || this.generateKey();
    }

    isValid(key) {
        const hasOnlyLowerCaseLetters = /^[a-z]+$/;
        if (!hasOnlyLowerCaseLetters.test(key)) throw new Error('Bad key');
        return key;
    }

    getRandomLetter() {
        return this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
    }

    generateKey(key) {
        return [...new Array(100)]
                .map(el => this.getRandomLetter())
                .join('');
    }

    getAlphabetIndex(letter) {
        return this.alphabet.indexOf(letter);
    }

    wrapCollectionIndex(position, collectionLength) {
        return ((position % collectionLength) + collectionLength) % collectionLength;
    }

    substitute(letter, currentIndex, mode) {
        const keyIndex = this.wrapCollectionIndex(currentIndex, this.key.length);
        const keyAlphabetIndex = this.getAlphabetIndex(this.key[keyIndex]) * mode;
        const targetAlphabetIndex = this.getAlphabetIndex(letter);
        const finalLetter = this.wrapCollectionIndex(targetAlphabetIndex + keyAlphabetIndex, this.alphabet.length);

        return this.alphabet[finalLetter];
    }

    transform(target, mode) {
        return [...target]
                .map((letter, index) => this.substitute(letter, index, mode))
                .join('');
    }

    encode(target) {
        return this.transform(target, 1)
    }

    decode(target) {
        return this.transform(target, -1);
    }

}

export default Cipher;