import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WordSearch from './cmp/wordsearch';

/* TODO

Show word List, 
allow Selection of multiple cells
allow diagonal selection?

*/

ReactDOM.render(
  <WordSearch />,
  document.getElementById('root')
);
