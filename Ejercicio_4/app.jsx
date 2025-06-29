function App() {
  const [activoIzquierdo, setActivoIzquierdo] = React.useState(true);

  const activarDerecho = () => setActivoIzquierdo(false);
  const activarIzquierdo = () => setActivoIzquierdo(true);

  return (
    <div className="botones">
      <button onClick={activarDerecho} disabled={!activoIzquierdo}>Izquierdo</button>
      <button onClick={activarIzquierdo} disabled={activoIzquierdo}>Derecho</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
