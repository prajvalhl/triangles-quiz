import React from "react";

export function Header() {
  return (
    <div>
      <h1 className="brand-name">All About Triangles</h1>
      <div>
        <ul className="list">
          <li className="li-inline">is Triangle?</li>
          <li className="li-inline">Quiz</li>
          <li className="li-inline">Hypotenuse</li>
          <li className="li-inline">Area of Triangle</li>
        </ul>
      </div>
    </div>
  );
}