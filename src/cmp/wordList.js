import React from 'react';

export default class ShowWordList extends React.Component {
    renderSuccessMessage() {
        if (this.props.wordList.length === this.props.foundWordList.length) {
          return (<h1> Congratulations, you found all the words </h1>)
        }

    }
  render() {

    return (
    	<div>
        <div>
          {this.props.wordList.map(word => <h2 className={this.props.foundWordList.includes(word) ? 'wordfound' : ''}>{word}</h2>)}
        </div>
        <div>
         {this.renderSuccessMessage()}
        </div>
      </div>
    )
}
}