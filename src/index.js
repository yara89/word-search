import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* TODO

allow Selection of multiple cells
Generate words, and find a place it fits in grid
allow diagonal selection?

*/

class Cell extends React.Component {
  render() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

    return (
      <button className="cell">
        {randomCharacter}
      </button>
    );
  }
}


class Board extends React.Component {
  renderCell(i) {
    return <Cell />;
  }

  render() {
    const status = 'you have # words left';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
          {this.renderCell(6)}

        </div>
        <div className="board-row">
          {this.renderCell(7)}
          {this.renderCell(8)}
          {this.renderCell(9)}
          {this.renderCell(10)}
          {this.renderCell(11)}
          {this.renderCell(12)}
          {this.renderCell(13)}

        </div>
        <div className="board-row">
          {this.renderCell(14)}
          {this.renderCell(15)}
          {this.renderCell(16)}
          {this.renderCell(17)}
          {this.renderCell(18)}
          {this.renderCell(19)}
          {this.renderCell(20)}
        </div>  
        <div className="board-row">
          {this.renderCell(21)}
          {this.renderCell(22)}
          {this.renderCell(23)}
          {this.renderCell(24)}
          {this.renderCell(25)}
          {this.renderCell(26)}
          {this.renderCell(27)}
        </div>
        <div className="board-row">
          {this.renderCell(28)}
          {this.renderCell(29)}
          {this.renderCell(30)}
          {this.renderCell(31)}
          {this.renderCell(32)}
          {this.renderCell(33)}
          {this.renderCell(34)}
        </div>
        <div className="board-row">
          {this.renderCell(35)}
          {this.renderCell(36)}
          {this.renderCell(37)}
          {this.renderCell(38)}
          {this.renderCell(39)}
          {this.renderCell(40)}
          {this.renderCell(41)}
        </div>
        <div className="board-row">
          {this.renderCell(42)}
          {this.renderCell(43)}
          {this.renderCell(44)}
          {this.renderCell(45)}
          {this.renderCell(46)}
          {this.renderCell(47)}
          {this.renderCell(48)}
        </div>
      </div>
    );
  }
}


class WordSearch extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/*function makeid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
  console.log(makeid());
}*/


ReactDOM.render(
  <WordSearch />,
  document.getElementById('root')
);
