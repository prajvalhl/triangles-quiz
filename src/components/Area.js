import React, { useState } from "react";

export function Area() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [flag, setFlag] = useState(true);
  const [msg, setMsg] = useState("");
  const [output, setOutput] = useState("");

  function handleClick() {
    if (base && height) {
      setFlag(false);
      const area = 0.5 * (Number(base) * Number(height));
      setOutput(`Area of your triangle is ${area}`);
    } else {
      setFlag(true);
      setMsg("One or more fields are empty. Please fill them all to continue!");
    }
  }

  return (
    <div className="area">
      <h1>Calculate Area of a Triangle</h1>
      <p>
        Fill the base and height of your triangle and we'll tell you the Area.
      </p>
      <div className="div-input">
        <label htmlFor="base">Enter base value (a)</label>
        <br />
        <input
          type="number"
          id="base"
          onChange={(e) => setBase(e.target.value)}
        />
      </div>
      <div className="div-input">
        <label htmlFor="height">Enter height value (b)</label>
        <br />
        <input
          type="number"
          id="height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="btn-submit" onClick={handleClick}>
        Calculate Area
      </button>
      <div className="div-output">
        <p>Result 👇</p>
        <p>{flag && msg}</p>
        <p>{!flag && output}</p>
      </div>
    </div>
  );
}
