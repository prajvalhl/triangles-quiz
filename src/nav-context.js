import { createContext, useContext, useState } from "react";

const Nav = createContext();

export function NavProvider({ children }) {
  const [route, setRoute] = useState("hypotenuse");
  return <Nav.Provider value={{ route, setRoute }}>{children}</Nav.Provider>;
}

export function useNav() {
  return useContext(Nav);
}
