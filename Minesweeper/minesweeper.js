//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) =>  {
  if(input.length == 0) return [];
  if((input[0].length == 0)) return [''];

  let x = [];

  input.forEach(element => {
    x.push(element.split(''));
  });
  
  let finalArray = x;
  
  x.map((inner, i) =>{
    inner.map((val, j) => {
      if(val == '*'){
        finalArray[i][j] = '*';
        // i-1 row    
        if(i-1 >= 0){
          if(j-1 >= 0){
            if(x[i-1][j-1] != '*'){
              finalArray[i-1][j-1]++;
            }
          }

          if(x[i-1][j] != '*'){
            finalArray[i-1][j]++;
          }
          if(j+1 < x[i-1].length){
            if(x[i-1][j+1] != '*'){
              finalArray[i-1][j+1]++;
            }
          }
        }
// i row
        if(j-1 >= 0){
          if(x[i][j-1] != '*'){
            finalArray[i][j-1]++;
          }
        }
        if(j+1 < inner.length){
          if(x[i][j+1] != '*'){
            finalArray[i][j+1]++;
          }
        }
        
// i + 1 row
        if(i+1 < x.length){
          if(j-1 >= 0){
            if(x[i+1][j-1] != '*'){
              finalArray[i+1][j-1]++;
            }
          }
          
          if(x[i+1][j] != '*'){
            finalArray[i+1][j]++;
          }
          
          if(j+1 < x[i+1].length){
            if(x[i+1][j+1] != '*'){
              finalArray[i+1][j+1]++;
            }
          }
        }

      }
    })
  })
  
  const output = [];
  finalArray.forEach(el => {
    output.push(el.join(''));
    // output.push(el.join('').replace(/0/g,' '));
  })
  
  return output;
  }