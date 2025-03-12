import React from "react";
import { useState } from "react";

const App = () => {
  const [val1, setval1] = useState(0);
  const [val2, setval2] = useState(0);

  const [res, setRes] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Number 1"
        onChange={(event) => {
          setval1(Number(event.target.value));
        }}
        value={val1}
      />
      <input
        type="text"
        placeholder="Enter Number 2"
        onChange={(event) => {
          setval2(Number(event.target.value));
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
