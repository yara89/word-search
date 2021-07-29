import React from 'react';

export default class ShowWordList extends React.Component {
  render() {
  const wordList = ['house', 'cat', 'leg', 'react', 'hello'];
  return (
    	<div>
      {wordList.map(word => <h2>{word}</h2>)}
      	</div>
    )
}
}