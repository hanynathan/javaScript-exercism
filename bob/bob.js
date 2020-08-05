//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
	const yellLetters = /[a-zA-Z]/g;
	let result = 'Whatever.';
	const newMessage = message.trim();

	const sayNothing = newMessage.length;
	const isQuestion = newMessage.endsWith('?');
	const upper = newMessage === newMessage.toUpperCase();
	const isYellTalks = newMessage.match(yellLetters);

	if(sayNothing === 0){
		result = 'Fine. Be that way!';
	}else if(isQuestion && upper && isYellTalks){
		result = 'Calm down, I know what I\'m doing!';
	}else if(isQuestion){
		result = 'Sure.';
	}else if (upper && isYellTalks){
		result = 'Whoa, chill out!';
	}

	return result;
};
