import React, { useState } from "react";

const App = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [res, setRes] = useState(0);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setVal1(Number(event.target.value));
        }}
        placeholder="Enter val 1"
        value={val1}
      />
      <input
        type="text"
        onChange={(event) => {
          setVal2(Number(event.target.value));
        }}
        placeholder="Enter val 2"
        value={val2}
      />
    </div>
  );
};

export default App;
