import { useState, useEffect } from "react";

const State = () => {
  //nuevo state para app
  const [state, setState] = useState(0);

  //cuando se actualiza el estado se renderiza de nuevo todo el componente por lo que se genera un ciclo infinito
  //   setState(10)

  const handleClick = () => {
    setState(state + 1);
  };

  //useEffect para controlar el ciclo de vida del componente
  //los [] son una lista de dependecias que indican de que variable depende el estado

  useEffect(() => {
    console.log("useEffect");
  }, []);

  
  return (
    <div>
      <h1>UseState</h1>
      <hr />
      cuenta : {state}
      <br />
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default State;
