import React, { useState } from "react";

export function Hypotenuse() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [flag, setFlag] = useState(true);
  const [msg, setMsg] = useState("");
  const [output, setOutput] = useState("");

  function handleClick() {
    if (base && height) {
      setFlag(false);
      const hypotenuse = Math.sqrt(base * base + height * height);
      setOutput(`Hypotenuse of your triangle is ${hypotenuse}`);
    } else {
      setFlag(true);
      setMsg("One or more fields are empty. Please fill them all to continue!");
    }
  }

  return (
    <div className="hypotenuse">
      <h1>Calculate Hypotenuse of a Triangle</h1>
      <p>
        Fill the base and height of a triangle and we'll tell you the
        Hypotenuse.
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
        Calculate Hypotenuse
      </button>
      <div className="div-output">
        <p>Result 👇</p>
        <p>{flag && msg}</p>
        <p>{!flag && output}</p>
      </div>
    </div>
  );
}
