import React, { useState } from "react";

function App() {

  let [fullName, setFName] = useState({
    fName: "",
    lName: ""
  })

  function changeFName(event){
    const {value, name} = event.target
    setFName(prevValue => {if (name === "fName"){
      return {
        fName: value,
        lName: prevValue.lName
      }
    } else if(name === "lName"){
      return {
        fName: prevValue.fName,
        lName: value
      }
    }})

  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={changeFName} name="fName" placeholder="First Name" />
        <input onChange={changeFName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
