import "./styles.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IsTriangle } from "./components/IsTriangle";
import { Quiz } from "./components/Quiz";
import { Hypotenuse } from "./components/Hypotenuse";
import { Area } from "./components/Area";
import { useNav } from "./nav-context";

export default function App() {
  const { route } = useNav();
  return (
    <div className="App">
      <Header />
      {route === "isTriangle" && <IsTriangle />}
      {route === "quiz" && <Quiz />}
      {route === "hypotenuse" && <Hypotenuse />}
      {route === "area" && <Area />}
      <Footer />
    </div>
  );
}
