import React, { useState } from "react";

function App() {

  let [headingText, setHeading] = useState("Hello")
  let [backgroundColor, changeColor] = useState("white")

  function buttonClicked(){
    setHeading("Submitted")
  }

  function mouseOutEvent(){
    changeColor("white")
  }

  function mouseOverEvent(){
    changeColor("black")
  }

  const style = {
    backgroundColor: backgroundColor
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={buttonClicked} onMouseOver={mouseOverEvent} onMouseOut={mouseOutEvent} style={style}>Submit</button>
    </div>
  );
}

export default App;
