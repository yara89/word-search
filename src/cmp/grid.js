
import React from 'react';
import BoardCell from './BoardCell'



export default class Grid extends React.Component {
    constructor(props) {      
      super(props); 
      this.beginSelection = this.beginSelection.bind(this);
      this.endSelection = this.endSelection.bind(this);
      this.updateSelection = this.updateSelection.bind(this);  
      this.state = {
        isSelecting: false,
        startRow:0,
        startCol:0,
        shouldHighlight:0,
        startHightlightedChars:0
      }
    
     }


    cellSelected(rows,cols) {
      let charIndex="r" + rows + "-c" + cols;
      return this.props.highlightedChars.hasOwnProperty(charIndex);
    }

    beginSelection(rowIndex, colIndex, val) {
      console.log("beginSelection " + rowIndex + " " + colIndex);
      let shouldHighlight = !this.cellSelected(rowIndex,colIndex);
      let startHightlightedChars = this.cloneObject(this.props.highlightedChars);

      this.setState({
        isSelecting: true, 
        startRow:rowIndex, 
        startCol:colIndex, 
        shouldHighlight:shouldHighlight,
        startHightlightedChars: startHightlightedChars
      } )
      this.props.handleHighlightChange(rowIndex, rowIndex, colIndex, colIndex, shouldHighlight, startHightlightedChars);
      
    }

    endSelection(rowIndex, colIndex, val) {
      console.log("endSelection" );
      this.updateSelection(rowIndex, colIndex)
      this.setState({isSelecting: false})

    
    }

    updateSelection(rowIndex, colIndex, val) {
     if (this.state.isSelecting) {
       if (this.state.startRow===rowIndex) {
            this.props.handleHighlightChange(rowIndex, rowIndex, Math.min(colIndex, this.state.startCol), Math.max(colIndex, this.state.startCol), this.state.shouldHighlight, this.state.startHightlightedChars);
       } else if (this.state.startCol===colIndex) {
        this.props.handleHighlightChange(Math.min(rowIndex, this.state.startRow), Math.max(rowIndex, this.state.startRow), colIndex, colIndex, this.state.shouldHighlight, this.state.startHightlightedChars);
   } 
       console.log("updateSelection" );
     }
    } 

    cloneObject(obj) { 
      return JSON.parse(JSON.stringify(obj));
      }

    render() {
      //const status = 'you have' + ' ' + {words.length} + ' words left';
      const board = [];
      let rows=0;

      this.props.values.forEach(element => {
        let wordList =[];
          for (let i = 0; i < element.length; i++){
            wordList.push(<BoardCell 
              rowIndex={rows} 
              colIndex={i} 
              letter={element[i]} 
              isSelected={this.cellSelected(rows,i)} 
              onBeginSelection={this.beginSelection}
              onEndSelection={this.endSelection}
              onUpdateSelection={this.updateSelection}
              />) 
          };
          board.push(<div className="board-row">{wordList}</div>)
  
          rows++;
        });
          
          let isSelected = [];
      


      return (
           <div>
            {board}

          </div>
      );
    }
  }