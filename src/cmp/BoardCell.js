import React from 'react';

export default class BoardCell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

            handleClick(e) { 
                console.log("hello " + this.props.letter);
                this.props.onCellClick(this.props.rowIndex, this.props.colIndex, this.props.value); //
            }
            getClasses = () => {
                let classes=['cell'];
                if (this.props.isSelected) classes.push('selected');
                //if (this.props.isHighlighted) classes.push('isHighlighted');

                return classes.join(' ');

            }
                
    
            render() {
                return( <div className={this.getClasses()} onClick={this.handleClick}>
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