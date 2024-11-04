import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onInput} type="text" value={props.inputText} name="taskInput"/>
      <button onClick={props.onAddition}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
