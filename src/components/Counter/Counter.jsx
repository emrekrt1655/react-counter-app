import React from "react";
import "./Counter.css";

export default function Counter() {
  const [counterValue, setCounterValue] = React.useState(0);
  const [inputValue, setInputValue] = React.useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };
  const subFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 
      data-testid="counter"
      className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? 'red' : ""}`}
      >
          {counterValue}
      </h2>
      <button data-testid="subBtn" onClick={subFromCounter}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="addBtn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}
