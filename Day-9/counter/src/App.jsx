import React, { useState } from "react";

const App = () => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [res, setRes] = useState(0);

  return (
    <div>
      <input
        placeholder="Enter value 1"
        type="number"
        onChange={(event) => {
          setVal1(Number(event.target.value));
        }}
        value={val1}
      />
      <input
        placeholder="Enter value 1"
        type="number"
        onChange={(event) => {
          setVal2(Number(event.target.value));
        }}
        value={val2}
      />

      <h1>Result : {res}</h1>

      <button
        onClick={() => {
          setRes(val1 + val2);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App;
