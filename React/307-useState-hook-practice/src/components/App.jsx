import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  const [latestTime, updateTime] = useState(currentTime);

  function timeReset() {
    setTime(currentTime);
    console.log("Clicked");
  }
  function sayTime() {
    updateTime(currentTime);
  }
  setInterval(sayTime, 1000);
  return (
    <div className="container">
      <p>{time}</p>
      <button onClick={timeReset}>Get Time</button>
      <p>{latestTime}</p>
      <button onClick={sayTime}>Get Time</button>
    </div>
  );
}

export default App;
