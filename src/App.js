import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App container">
      <div>
        <p
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </p>
        <button>
          <span>{counter}</span>
        </button>
        <p
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </p>
      </div>
      <p  onClick={() => {
            
          }}>Reset</p>
    </div>
  );
}

export default App;
