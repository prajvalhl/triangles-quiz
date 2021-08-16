import React from "react";

export function IsTriangle() {
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
        <input type="number" id="angle1" />
      </div>
      <div className="angle-input">
        <label htmlFor="angle2">Angle 2</label>
        <br />
        <input type="number" id="angle2" />
      </div>
      <div className="angle-input">
        <label htmlFor="angle3">Angle 3</label>
        <br />
        <input type="number" id="angle3" />
      </div>
      <button className="btn-submit">Is Triangle?</button>
    </div>
  );
}
