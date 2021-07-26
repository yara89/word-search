
import React from 'react';
import Grid from './grid';
import * as logic from '../logic/app';


export default class WordSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        highlightedChars: {
          "r0-c0": true,
          "r1-c0": true,
          "r2-c0": true,
        },
      };

      let wordList = ['house', 'cat', 'leg', 'react', 'hello'];
      let rowCount = 10;
      let colCount = 10;
      this.grid = logic.getWordGrid(wordList, rowCount, colCount);
      this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(rowIndex, colIndex, val){
      const newHighlightedChars = this.cloneObject(this.state.highlightedChars); 
      let charIndex = "r" + rowIndex + "-c" + colIndex;
        if (newHighlightedChars.hasOwnProperty(charIndex)) {
          delete newHighlightedChars[charIndex];
        } else {
          newHighlightedChars[charIndex] = true;
        }
      
      console.log(rowIndex); 
      console.log(newHighlightedChars); 

      this.setState({
        highlightedChars: newHighlightedChars, 
          })
    }
    
  cloneObject(obj) { 
  return JSON.parse(JSON.stringify(obj));
  }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Grid values={this.grid} highlightedChars={this.state.highlightedChars} onCellClick={this.handleClick} />
          </div>
          <div className="game-info">
            <div>{this.wordList}</div>
            <ol>Welcome to Word Sreach react game</ol>
          </div>
        </div>
      );
    }
}
  
  /*
      return (
        <div> <getWordGrid grid highlightedChars={highlightedChars} />
        </div> 
       );
      
    }
*/