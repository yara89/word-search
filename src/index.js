import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as logic from './wordsearch.js'

/* TODO

allow Selection of multiple cells
Generate words, and find a place it fits in grid
allow diagonal selection?

*/

class Cell extends React.Component {
  constructor(props) {      
     super(props);     
      this.handleClick = this.handleClick.bind(this); }

  handleClick(e) { this.props.onCellClick(this.props.rowIndex, this.props.colIndex, this.props.value);  }
  render() {
    return (
      <button className="cell" onClick={this.handleClick} >
       {this.props.value}
      </button>
    );
  }
}


class Grid extends React.Component {
  constructor(props) {      
    super(props);     
     this.handleClick = this.handleClick.bind(this); }

  renderCell(i) {
    return <Cell />;
  }
  handleClick(rowIndex, colIndex, val){
  console.log("hello " + val)}

  render() {
    const status = 'you have # words left';

    const board = [];

    this.props.values.forEach(element => {
      let wordList =[];
        for (let i = 0; i < element.length; i++){
          wordList.push(<Cell value={element[i]}  onCellClick={this.handleClick}  />) 
        }
        board.push(<div className="board-row">{wordList}</div>)
      });
    
    return (
      <div>
        <div className="status">{status}</div>
        {board}
        </div>
    );
  }
}
   


class WordSearch extends React.Component {
  constructor(props) {
    super(props);
    let wordList = ['house', 'cat', 'leg'];
    let rowCount = 10;
    let colCount = 10;
    this.grid = logic.getWordGrid(wordList, rowCount, colCount);
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Grid values={this.grid} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <WordSearch />,
  document.getElementById('root')
);
