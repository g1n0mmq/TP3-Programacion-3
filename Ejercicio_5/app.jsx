const { useState, useEffect } = React;

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("sumar");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");
  const [botonDisabled, setBotonDisabled] = useState(false);

  useEffect(() => {
    if (op === "dividir" && (num2 === "" || Number(num2) === 0)) {
      setError("No se puede dividir por 0");
      setResultado("");
      setBotonDisabled(true);
    } else {
      setError("");
      setBotonDisabled(false);
    }
  }, [num2, op]);

  const calcular = (e) => {
    e.preventDefault();

    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setError("Por favor, ingresá un valor");
      setResultado("");
      return;
    }

    setError("");

    let r;
    switch (op) {
      case "sumar":
        r = a + b;
        break;
      case "restar":
        r = a - b;
        break;
      case "multiplicar":
        r = a * b;
        break;
      case "dividir":
        r = a / b;
        break;
      default:
        r = "Operación inválida";
    }

    setResultado(`Resultado: ${r}`);
  };

  return (
    <>
      <form onSubmit={calcular}>
        <label htmlFor="num1">Número 1:</label>
        <input
          type="number"
          id="num1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />

        <label htmlFor="num2">Número 2:</label>
        <input
          type="number"
          id="num2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />

        <label htmlFor="op">Operación:</label>
        <select
          id="op"
          value={op}
          onChange={e => setOp(e.target.value)}
        >
          <option value="sumar">Suma</option>
          <option value="restar">Resta</option>
          <option value="multiplicar">Multiplicación</option>
          <option value="dividir">División</option>
        </select>

        <button id="calcular" disabled={botonDisabled}>
          Calcular
        </button>
      </form>

      <p id="resultado">{resultado}</p>
      <p id="error" className="error">{error}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
