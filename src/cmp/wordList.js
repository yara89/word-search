import React from 'react';

export default class ShowWordList extends React.Component {
  render() {
    return (
    	<div>
      {this.props.wordList.map(word => <h2 className={this.props.foundWordList.includes(word) ? 'wordfound' : ''}>{word}</h2>)}
      	</div>
    )
}
}