import React from "react";

function Note(props) {

  function deleteTask() { 
    props.onDelete(props.id)
   }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteTask}>DELETE</button>
    </div>
  );
}

export default Note;
