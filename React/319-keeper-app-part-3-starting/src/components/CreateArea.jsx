import React, { useState } from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [note, setNote] = useState([])

  function titleUpdate(event){
    let value = event.target.value
    setTitle(value)
  }

  function noteUpdate(event){
    let newContent = event.target.value
    setContent(newContent)
  }

  function addButton(event){
    setContent("")
      setTitle("")
      event.preventDefault()
      props.onAdd({title, content})
      
  }

  return (
    <div>
      <form onSubmit={addButton}>
        <input onChange={titleUpdate} name="title" placeholder="Title" required/>
        <textarea onChange={noteUpdate} name="content" placeholder="Take a note..." rows="3"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;