function getWordGrid(wordList, rowCount, colCount) {
   let grid = []
   
   //creating empty grid
    for (let r = 0; r < rowCount; r++) {
       let col = []; 
       for (let c = 0; c < colCount; c++) {
             col.push('');
       } 
       grid.push(col);
    } 
    let usedRows = [];
    // fill with  words from word list
    for ( let w = 0; w < wordList.length; w++) {
      let word = wordList[w];
      let randomRow = null;
      let foundRow = false;
      while (!foundRow) {
        randomRow = getRandomInt(0, rowCount - 1); 
        if ( !usedRows.includes(randomRow) ) {
          usedRows.push(randomRow);
          foundRow = true;
        }
      } 

      let colStart = getRandomInt(0, colCount - word.length);
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
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
            grid[r][c] = randomCharacter;
          }
      }
    }

    return grid;
} 
/* higihlightedChars = {"r0-c0": true,
          "r1-c0": true,
          "r2-c0": true,
        }, 
  this.wordList = ['house', 'dog', 'leg', 'react', 'hello'];
this.grid = [['d','o','g','t','s'],['h','e','h','s', 'm',],['d','i','h','l','m',]]
      }*/

function getWordsFound (highlightedChars, wordList, grid) {
  let found = []; 
  for (let r=0; r < grid.length; r++) {
    let row = grid[r];
    let currSelectedWord = '';
    for (let c=0; c < row.length; c++) {
     let letter = row[c];
     let highlightedIndex = "r" + r + "-c" + c;
     let isHighlighted = highlightedChars.hasOwnProperty(highlightedIndex);
     if (isHighlighted) { 
       currSelectedWord = currSelectedWord + letter;
     } else {
       
       //console.log("trying to find " + currSelectedWord);
        // check if currSelectedWord is word
        if (wordList.includes(currSelectedWord.toLowerCase())) {
          found.push(currSelectedWord.toLowerCase());

        } 
        // reset 
        currSelectedWord = "";
     } 
    }   // end loop over columns
    if (wordList.includes(currSelectedWord.toLowerCase())) {
      found.push(currSelectedWord.toLowerCase());
    } 

  } //end loop over rows
  console.log(found + " is found")
  return found

}
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


module.exports = { getWordGrid, getWordsFound };