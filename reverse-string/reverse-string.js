function reverseString(str){
  const strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
}

export default reverseString;




reverseString = function (input) {
  if (input === '')
    return '';
  else
    console.log(input.substr(1));
    console.log(input.charAt(0));
    return reverseString(input.substr(1)) + input.charAt(0);
};
