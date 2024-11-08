import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("")
  const [tasksList, setList] = useState([])

  function updateTask(event) { 
      let value = event.target.value
      setTask(value)
      console.log(task);
   }

   function addTask(){
    setList((prevValue) => 
      [...prevValue, task]
    )
    setTask("")
   }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateTask} type="text" />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasksList.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;