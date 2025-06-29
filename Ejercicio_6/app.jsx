const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setImc(null);
      return;
    }

    const valorImc = pesoNum / (alturaNum * alturaNum);
    setImc(valorImc);
  };

  const obtenerMensajeIMC = () => {
    if (imc < 18.5) {
      return { texto: "Nivel bajo", clase: "amarillo" };
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return { texto: "Nivel normal", clase: "verde" };
    }
    if (imc >= 25 && imc <= 29.9) {
      return { texto: "Nivel de sobrepeso", clase: "naranja" };
    }
    if (imc >= 30) {
      return { texto: "Nivel de obesidad", clase: "rojo" };
    }
    return null;
  };

  const resultado = imc !== null ? obtenerMensajeIMC() : null;

  return (
    <div className="contenedor">
      <h2>Ejercicio IMC</h2>
      <form onSubmit={calcularIMC} className="formulario">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          id="peso"
          type="number"
          step="any"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />

        <label htmlFor="altura">Altura (m):</label>
        <input
          id="altura"
          type="number"
          step="any"
          value={altura}
          onChange={e => setAltura(e.target.value)}
        />

       <button type="submit" id="calcular">Calcular</button>
      </form>

      {resultado && (
        <p className={`mensaje ${resultado.clase}`}>
          IMC: {imc.toFixed(2)} — {resultado.texto}
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
