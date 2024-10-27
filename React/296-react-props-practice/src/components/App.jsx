import React from "react";
import Avatar from "./Avatar";
import Info from "./info";
import ID from "./ID";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <ID id={props.id} className="info" />
          <h2 className="name">{props.name}</h2>
          <Avatar url={props.url} />
        </div>
        <Info phone={props.phone} email={props.email} />
      </div>
    </div>
  );
}

export default App;
