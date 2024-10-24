import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.url} alt="avatar_img" />
        </div>
        <div className="bottom">
          <div className="info">
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
