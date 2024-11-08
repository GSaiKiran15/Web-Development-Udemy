import React from "react"

function Todo(props) { 
    return(
        <div onClick={() => {props.onChecked(props.id)}}><li key={props.index} id={props.index}>{props.text}</li></div>
    )
 }

export default Todo
// import React, { useState } from "react";

// function Todo(props){
//     let [isDone, setStyle] = useState(false)
//     function lineThrough() {setStyle((prevValue) => {return !prevValue})
//      }

//     return (
//     <li key={props.index} onClick={lineThrough} style={{
//         "textDecoration": isDone ? "line-through" : "none"
//     }}>{props.todoItem}</li>)
// }

// export default Todo