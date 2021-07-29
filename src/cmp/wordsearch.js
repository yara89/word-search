
import React from 'react';
import Grid from './grid';
import * as logic from '../logic/app';
import ShowWordList from './wordList';



export default class WordSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        highlightedChars: {
        },
      };
      let drag = false;

      let wordList = ['house', 'cat', 'leg', 'react', 'hello'];
      let rowCount = 10;
      let colCount = 10;

      this.grid = logic.getWordGrid(wordList, rowCount, colCount);
     // this.showWordList(document.getElementById("list"));
      this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(rowIndex, colIndex, val){
      const newHighlightedChars = this.cloneObject(this.state.highlightedChars); 
      let charIndex = "r" + rowIndex + "-c" + colIndex;
      const value = (this.props.letter);

        if (newHighlightedChars.hasOwnProperty(charIndex)) {
          delete newHighlightedChars[charIndex];
        } else {
          newHighlightedChars[charIndex] = true;
        }
      
      //console.log(rowIndex); 
      //console.log(newHighlightedChars); 
      //console.log(value); 
      //console.log(newHighlightedChars[charIndex]); 
      //console.log(word + ' in ' + rowIndex + ' ' + colIndex);
      console.log(value);


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
                <ol>Welcome to Word Sreach react game</ol>
                <ol> <ShowWordList/></ol>
                <ol></ol>
        </div>
        </div>

      )}};