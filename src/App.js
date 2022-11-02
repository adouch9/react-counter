import "./App.css";
import { useState } from "react";
import Soustraction from "./components/Soustraction";
import Adittion from "./components/Adittion";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App container">
      <div>
        {/* <p
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </p> */}
        <Soustraction counter={counter} setCounter={setCounter} />
        <button>
          <span>{counter}</span>
        </button>

        <Adittion counter={counter} setCounter={setCounter} />
        {/* <p
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </p> */}
      </div>

      <p
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </p>
    </div>
  );
}

export default App;
