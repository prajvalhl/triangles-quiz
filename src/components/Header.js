import React from "react";
import { useNav } from "../nav-context";

export function Header() {
  const { route, setRoute } = useNav();

  return (
    <div className="header">
      <h1 className="brand-name">All About Triangles</h1>
      <div>
        <ul className="list nav-items">
          <li className="li-inline">
            <button
              className="nav-btn"
              style={{ fontWeight: route === "isTriangle" && "bold" }}
              onClick={() => setRoute("isTriangle")}
            >
              is Triangle?
            </button>
          </li>
          <li className="li-inline">
            <button
              className="nav-btn"
              style={{ fontWeight: route === "quiz" && "bold" }}
              onClick={() => setRoute("quiz")}
            >
              Quiz
            </button>
          </li>
          <li className="li-inline">
            <button
              className="nav-btn"
              style={{ fontWeight: route === "hypotenuse" && "bold" }}
              onClick={() => setRoute("hypotenuse")}
            >
              Hypotenuse
            </button>
          </li>
          <li className="li-inline">
            <button
              className="nav-btn"
              style={{ fontWeight: route === "area" && "bold" }}
              onClick={() => setRoute("area")}
            >
              Area
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
