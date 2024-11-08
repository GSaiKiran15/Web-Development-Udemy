import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [updatingTime, updateTime] = useState(time);

  function updater() {
    let newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }
  setInterval(updater, 1000);
  return (
    <div className="container">
      <h2>{updatingTime}</h2>
      <button>Get Time</button>
    </div>
  );
}

export default App;
