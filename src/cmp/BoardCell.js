import React from 'react';

export default class BoardCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.beginSelection = this.beginSelection.bind(this);
        this.endSelection = this.endSelection.bind(this);
        this.updateSelection = this.updateSelection.bind(this);
    }

        
    handleClick(e) { 
        console.log("hello " + this.props.letter);
      //  this.props.onCellClick(this.props.rowIndex, this.props.colIndex, this.props.value); //
    }
    beginSelection(e) { 
        this.props.onBeginSelection(this.props.rowIndex, this.props.colIndex, this.props.value); //
    }
    endSelection(e) { 
        this.props.onEndSelection(this.props.rowIndex, this.props.colIndex, this.props.value); //
    }
    updateSelection(e) { 
        this.props.onUpdateSelection(this.props.rowIndex, this.props.colIndex, this.props.value); //
    } 
    getClasses = () => {
        let classes=['cell'];
        if (this.props.isSelected) classes.push('selected');
        //if (this.props.isHighlighted) classes.push('isHighlighted');

        return classes.join(' ');

    }
        
    
            // console.log(this.props.classes)

    render() {
        return( 
            <div className={this.getClasses()} onClick={this.handleClick} 
            onMouseDown={this.beginSelection}
            onMouseUp={this.endSelection}
            onMouseMove={this.updateSelection}>
            {this.props.letter}
            </div>               
        )

    }


};

 /*   getClasses = () => {
        let classes = ['cell']; //all cells get the 'cell' class, and maybe additional:

        if (this.props.isGivenValue) classes.push('given');
        if (this.props.isSelected) classes.push('selected');
        if (this.props.isHighlighted) classes.push('related');
        if (this.props.isConflicting) classes.push('wrong');
        
        return classes.join(' ');
    }
*/