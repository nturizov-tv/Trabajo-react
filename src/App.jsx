import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h1 className="text-center mb-4">Ejercicio 2: React Timer</h1>

      <button
        className={`btn w-100 mb-4 ${visible ? "btn-danger" : "btn-success"}`}
        onClick={() => setVisible(!visible)}
      >
        {visible ? "Ocultar Timer" : "Mostrar Timer"}
      </button>

      {visible && <Timer />}
    </div>
  );
}

export default App;