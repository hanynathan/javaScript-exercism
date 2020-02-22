class Transcription{
  toRna(dna){
    if (dna !== null) {
      const dnaArr = dna.split('');

      const rnaArr = dnaArr.map((x)=>{
        if(x === 'C'){
          return 'G';
        }else if (x === 'G') {
          return 'C';
        }else if (x === 'A') {
          return 'U';
        }else if (x === 'T') {
          return 'A';
        }else {
          throw new Error('Invalid input DNA.');
        }
      });

      return rnaArr.join('');
    }
  }
}


export default Transcription;
