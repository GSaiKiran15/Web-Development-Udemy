import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

function createCard(emoji) {
  return (
    <div key={emoji.id} className="emoji">
      <h1>{emoji.emoji}</h1>
      <h2>{emoji.name}</h2>
      <p>{emoji.meaning}</p>
    </div>
  );
}
ReactDOM.render(
  <div>{emojipedia.map(createCard)}</div>,
  document.getElementById("root")
);
