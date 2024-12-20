import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(true)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function clicked(){
    setExpanded(true)
    // if (isExpanded){
    //   return (<div><input
    //     name="title"
    //     onChange={handleChange}
    //     value={note.title}
    //     placeholder="Title"
    //   />
      
    //   <textarea
    //     onClick={clicked}
    //     name="content"
    //     onChange={handleChange}
    //     value={note.content}
    //     placeholder="Take a note..."
    //     rows="3"
    //   /><Zoom in={true}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom></div>) 
    // } else{
    //   <textarea
    //     onClick={clicked}
    //     name="content"
    //     onChange={handleChange}
    //     value={note.content}
    //     placeholder="Take a note..."
    //     rows="1"
    //   />
    // } 
  }

  return (
    <div>
      <form className="create-note"> 
        {isExpanded? <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      /> : null}
      <textarea
        onClick={clicked}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={isExpanded? "3": "1"}
      /><Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
