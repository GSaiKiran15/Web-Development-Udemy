import React from "react";
import { useState } from "react";
import Todo from "./todoitem";

function App() { 

  const [task, setTask] = useState("")
  const [tasksArr, setArray] = useState([])

  function handleChange(event){
    const value = event.target.value
    setTask(value)
  }
  
  function addItem(){
    setArray((prevValue => [...prevValue, task]))
    setTask("")
  }

  function deleteItem(id){
    setArray((prevValue) => {return prevValue.filter((value, index) => {
      return index != id
    })})
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasksArr.map((todoItem, index) => (
           <Todo key={index} id={index} text={todoItem} onChecked={deleteItem}/> 
          ))}
        </ul>
      </div>
    </div>
  );  
 }

export default App