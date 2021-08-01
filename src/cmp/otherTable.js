import React, { useState } from "react";
import "../index.css";

export default function Table(grid) {
  let table = [];
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [selecting, setSelecting] = useState(false);

  let beginSelection = i => {
    setSelecting(true);
    setStart(i);
    updateSelection(i);
  };

  let endSelection = (i = end) => {
    setSelecting(false);
    updateSelection(i);
  };

  let updateSelection = i => {
    if (selecting) {
      setEnd(i);
    }
  };
  
  for (let i = 0; i < 100; i++) {
    let a = (
      <span
        key={i}
        className={
          (end <= i && i <= start) || (start <= i && i <= end) ? "selection" : ""
        }
        onMouseDown={() => beginSelection(i)}
        onMouseUp={() => endSelection(i)}
        onMouseMove={() => updateSelection(i)}
      >
        {i}
      </span>
    );
    table.push(a);
  }

  return table;
}
