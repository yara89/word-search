function getWordGrid(wordList, rowCount, colCount) {
   let grid = []
   //creating empty grid
    for (let r = 0; r < rowCount; r++) {
       let col = []; 
       for (let c = 0; c < colCount; c++) {
             col.push('');
       } 
       grid.push(col);
    } // fill with random words 
      for ( let w = 0; w < wordList.length; w++) {
        let word = wordList[w];
        let randomRow = getRandomInt(0, rowCount - 1);
        let colStart = getRandomInt(0, colCount - word.length - 1);
        console.log("placing " + word + " in " + randomRow + " " + colStart);
       
        for (let i = 0; i < word.length; i++) {
          let letter = word[i];
            grid[randomRow][colStart + i] = letter.toUpperCase();
        }
      }      
       // fill remaining empty cells with random letters
      const alphabet = "abcdefghijklmnopqrstuvwxyz"
      
      for (let r = 0; r < rowCount; r++) {
          for (let c = 0; c < colCount; c++) {
            if ( grid[r][c] === '' ) {
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
              grid[r][c] = randomCharacter;
            }
             //col.push('');
          }
       } 
    return grid;
}



//function getRandomArbitrary(min, max) {
//    return Math.random() * (max - min) + min;}


/**
 * Returns a random integer between min (inclusive) and max .
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = { getWordGrid };
