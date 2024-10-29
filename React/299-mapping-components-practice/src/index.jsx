import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from "./emojipedia";

function createCard(emoji) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji.emoji}
          </span>
          <span>{emoji.name}</span>
        </dt>
        <dd>{emoji.meaning}</dd>
      </div>
    </dl>
  );
}

ReactDOM.render(
  <div>
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
    </div>
    <div className="dictionary">{emojipedia.map(createCard)}</div>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
