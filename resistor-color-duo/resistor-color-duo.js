//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = (bands) => {
	const first = COLORS.indexOf(bands[0]);
	const second = COLORS.indexOf(bands[1]);
	return Number(first + '' + second);
};
