
/*  
a function to handle something with click (put that information into the highlighted Chars, change the state every time a user clicks (populate as user clicks) react will rerender things ) 
setState eveytime it changes
letters selected start with mouse click, on a Cell, and end with mouse out.  (selectionStart + selectionEnd)


------
this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }
  mouseOver(evt) {
  	this.setState({
  		hilighted: true
  	})
  }

  -----
    render() {
    let cell = this.props.cell;
    let id = cell.id;
    let currClass = "cell"+ ((cell.used || this.state.hilighted) ? " hilighted" : "");
    return (
      <div className={currClass} id={id} 
      onMouseDown={this.props.selectionStart} 
      onMouseUp={this.props.selectionEnd} 
      onMouseOver={this.mouseOver}
      onMouseOut={this.mouseOut}
      >
      {cell.letter}
      </div>
    )
  }
}

-----
// see if the selection is equal to a word from word list

*/ 