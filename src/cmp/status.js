
import React from 'react';
import ShowWordList from './wordList';


export default class Status extends React.Component {
    render() {
    const word = this.props.word;
    return (
        <div className="status">
            {word.length > 0 &&
            <h2>
          You have {word} words left. </h2>
          } </div>

      );
    }
}