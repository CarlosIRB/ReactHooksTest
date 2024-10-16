import { useEffect, useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  //hook use effect para actualizar el titulo de la pagina
  useEffect(() => {
    document.title = `El boton fue presionado ${count} veces`;
    }, [count]);

  return (
    <div>
      <h1>Hook de estado</h1>
      <p>Tu haz presionado el boton {count} veces</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default StateHook;
