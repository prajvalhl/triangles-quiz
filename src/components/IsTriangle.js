import React, { useState } from "react";

export function IsTriangle() {
  const [angle1, setAngle1] = useState("");
  const [angle2, setAngle2] = useState("");
  const [angle3, setAngle3] = useState("");
  const [flag, setFlag] = useState(true);
  const [msg, setMsg] = useState("");
  const [output, setOutput] = useState("");

  function handleClick() {
    if (angle1 && angle2 && angle3) {
      setFlag(false);
      const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
      sumOfAngles === 180
        ? setOutput("Yaay! those angles form a triangle!! 😃")
        : setOutput("Oh no! those angles do not make a triangle! 😟");
    } else {
      setFlag(true);
      setMsg("One or more fields are empty. Please fill them all to continue!");
    }
  }

  return (
    <div className="isTriangle">
      <h1>Does it Make a Triangle?</h1>
      <h3>Let's find out!</h3>
      <p>
        Fill the three angles below and we'll tell you if it makes a triangle or
        not.
      </p>
      <div className="angle-input">
        <label htmlFor="angle1">Angle 1</label>
        <br />
        <input
          type="number"
          id="angle1"
          onChange={(e) => setAngle1(e.target.value)}
        />
      </div>
      <div className="angle-input">
        <label htmlFor="angle2">Angle 2</label>
        <br />
        <input
          type="number"
          id="angle2"
          onChange={(e) => setAngle2(e.target.value)}
        />
      </div>
      <div className="angle-input">
        <label htmlFor="angle3">Angle 3</label>
        <br />
        <input
          type="number"
          id="angle3"
          onChange={(e) => setAngle3(e.target.value)}
        />
      </div>
      <button className="btn-submit" onClick={handleClick}>
        Is Triangle?
      </button>
      <div className="div-output">
        <p>Result 👇</p>
        <p>{flag && msg}</p>
        <p>{!flag && output}</p>
      </div>
    </div>
  );
}
