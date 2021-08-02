
import React from 'react';
import Grid from './grid';
import * as logic from '../logic/app';
import ShowWordList from './wordList';
import BoardCell from './BoardCell';
//import Status from './status';



export default class WordSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        highlightedChars: {
        },
      };
      //let drag = false;
      
      this.wordList = ['house', 'dog', 'leg', 'react', 'hello'];
      let rowCount = 10;
      let colCount = 10;

      this.grid = logic.getWordGrid(this.wordList, rowCount, colCount);

     // this.showWordList(document.getElementById("list"));
      this.handleHighlightChange = this.handleHighlightChange.bind(this); 
    }

    handleHighlightChange(rowIndexStart, rowIndexEnd, colIndexStart, colIndexEnd, newHighlightedState){
      const newHighlightedChars = this.cloneObject(this.state.highlightedChars); 
      if (rowIndexStart == rowIndexEnd){ // if horizontal
        for (let c = colIndexStart; c <= colIndexEnd; c++) {
          let charIndex = "r" + rowIndexStart + "-c" + c;
          
          if (newHighlightedState) {
            newHighlightedChars[charIndex] = true;
          } else {
            delete newHighlightedChars[charIndex];
          }
      
        }

      } else if (colIndexStart == colIndexEnd) {// if vertical
        for (let r = rowIndexStart; r <= rowIndexEnd; r++) {
          let charIndex = "r" + r + "-c" + colIndexStart;
          
          if (newHighlightedState) {
            newHighlightedChars[charIndex] = true;
          } else {
            delete newHighlightedChars[charIndex];
          }
      
        }
      }
    
    
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
            <Grid values={this.grid} highlightedChars={this.state.highlightedChars} handleHighlightChange={this.handleHighlightChange}  />
          </div>
          <div className="game-info">
                <ol>Welcome to Word Sreach react game</ol>
                <ol> <ShowWordList wordList={this.wordList} foundWordList={logic.getWordsFound(this.state.highlightedChars,this.wordList,this.grid)}/></ol>

        </div>
        </div>

      )}};