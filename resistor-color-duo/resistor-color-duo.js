//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const decodedValue = ([color1, color2]) => {
	const first = COLORS.indexOf(color1);
	const second = COLORS.indexOf(color2);

	//in return using   (first * 10) + second     to avoid casting in case using Number(first + '' + second)
	// for 3 digits case
	// const third = 9;
	// const digit3 = ((first * 10) + second) * 10 + third;
	// console.log('first + second + third   ', (first * 10) + second, digit3);
	
	return (first * 10) + second; 
};
