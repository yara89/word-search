import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import getWordGrid from '../src/wordsearch';
//import getWordGrid, { wordList, rowCount, colCount } from './wordsearch.js';
//import getRandomInt, {min, max} from './wordsearch.js';

/* TODO

allow Selection of multiple cells
Generate words, and find a place it fits in grid
allow diagonal selection?

*/

class Cell extends React.Component {
  render() {
    //getWordGrid(wordList, rowCount, colCount) 
      
    return (
      <button className="cell">
        { }
      </button>
    );
  }
}

// class gridColumn
// class gridRow ??

class Grid extends React.Component {
 // renderCell(i) {
//    return <Cell />;}
  
  
  render() {
    const status = 'you have # words left';
    //getWordGrid(wordList, rowCount, colCount) ;
    const board = [];

    this.props.grid.array.forEach(element => {
      let wordList =[];
        for (let i = 0; i < element.length; i++){
          wordList.push(<div className="board-row">
          {element[i]}
          </div>
          )
        }
        board.push(<div className="container"></div>)
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Grid />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

 /*   getClasses = () => {
        let classes = ['cell']; //all cells get the 'cell' class, and maybe additional:

        if (this.props.isGivenValue) classes.push('given');
        if (this.props.isSelected) classes.push('selected');
        if (this.props.isHighlighted) classes.push('related');
        if (this.props.isConflicting) classes.push('wrong');
        
        return classes.join(' ');
    }
*/


ReactDOM.render(
  <WordSearch />,
  document.getElementById('root')
);
