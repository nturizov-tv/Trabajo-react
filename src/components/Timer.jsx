import { useState, useEffect } from "react";

function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    // Cleanup: detiene el intervalo cuando el componente se desmonta
    return () => clearInterval(id);
  }, []);

  return (
    <div className="card text-center shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Tiempo transcurrido</h2>
        <p className="display-4">{segundos}s</p>
      </div>
    </div>
  );
}

export default Timer;