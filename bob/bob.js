//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
	const yellLetters = /[a-zA-Z]/g;
	const newMessage = message.trim();

	const isQuestion = newMessage.endsWith('?');
	const isUpper = newMessage === newMessage.toUpperCase();
	const isYellTalks = newMessage.match(yellLetters);

	if(!newMessage){
		return 'Fine. Be that way!';
	}else if(isQuestion && isUpper && isYellTalks){
		return 'Calm down, I know what I\'m doing!';
	}else if(isQuestion){
		return 'Sure.';
	}else if (isUpper && isYellTalks){
		return 'Whoa, chill out!';
	}else{
		return 'Whatever.'
	}
};
