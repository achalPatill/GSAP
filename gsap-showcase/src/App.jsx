import { useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
  useEffect(() => {
    const blob = document.querySelector(".blob");

    window.addEventListener("mousemove", (e) => {
      gsap.to(blob, {
        x: e.clientX - 150,
        y: e.clientY - 150,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="blob"></div>

      <h1>Future Starts Here</h1>

      
    </div>
  );
}

export default App;