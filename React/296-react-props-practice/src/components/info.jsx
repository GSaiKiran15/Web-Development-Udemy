import React from "react";

function Info(props) {
  return (
    <div className="bottom">
      <div className="info">
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Info;
