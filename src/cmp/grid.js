
import React from 'react';
import BoardCell from './BoardCell'


export default class Grid extends React.Component {
    constructor(props) {      
      super(props);     
    }

  
    cellSelected(rows,cols) {
      let charIndex="r" + rows + "-c" + cols;
      return this.props.highlightedChars.hasOwnProperty(charIndex);
    }
  
    render() {
      const status = 'you have # words left';
      const board = [];
      let rows=0;
  
      this.props.values.forEach(element => {
        let wordList =[];
          for (let i = 0; i < element.length; i++){
            wordList.push(<BoardCell rowIndex={rows} colIndex={i} letter={element[i]} isSelected={this.cellSelected(rows,i)} onCellClick={this.props.onCellClick}  />) 
          };
          board.push(<div className="board-row">{wordList}</div>)
  
          rows++;
        });
      
        let isSelected = [];
  
  
      return (
        <div>
          <div className="status">{status}</div>
          {board}
          <div id="word-list"></div>
          </div>
      );
    }
  }