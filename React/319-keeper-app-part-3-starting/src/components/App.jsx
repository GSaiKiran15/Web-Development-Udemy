import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {

  const [tasksArray, setArray] = useState([])

  function createArray(note){
    setArray((prevValue) => [...prevValue, note])
  }

  function deleteElement(id){
    setArray(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={createArray}/>
        {tasksArray.map((task, index) => <Note key={index} id={index} title={task.title} content={task.content} onDelete={deleteElement}/>)}
      <Footer />
    </div>
  );
}

export default App;
