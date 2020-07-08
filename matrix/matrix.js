//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    const inputArray = input.split('\n');
    this.rows = inputArray.map(element => 
      element.split(' ').map(Number)
    );
  }
  
  // get rows() {
  //   return this.rows;
  // }

  get columns() {
    return this.rows[0].map((val, i) =>
      this.rows.map((val2, v) => 
        this.rows[v][i]
      )
    );
  }
}
