import React, { useState } from "react";

function App() {

  let [heading, changeHeading] = useState("")

  let input = ""

  function handleChanges(event) {
    input = event.target.value
  }

  function buttonClicked(event){
    changeHeading(input)
    event.preventDefault()
  }
    
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <form onSubmit={buttonClicked}>
      <input onChange={handleChanges} type="text" placeholder="What's your name?" />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
