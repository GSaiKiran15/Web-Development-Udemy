import React, { useState } from "react";

function App() {
  const [count, setState] = useState(0);
  function increment() {
    setState(count + 1);
  }

  function decrement() {
    setState(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
