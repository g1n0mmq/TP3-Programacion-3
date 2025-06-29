const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const error = document.getElementById("error");

num2.addEventListener("input", validar);
op.addEventListener("change", validar);
boton.addEventListener("click", calcular);

function validar() {
  const n2 = parseFloat(num2.value);
  if (op.value === "dividir" && n2 === 0) {
    error.textContent = "No se puede dividir por 0";
    resultado.textContent = "";
    boton.disabled = true;
  } else {
    error.textContent = "";
    boton.disabled = false;
  }
}

function calcular(e) {
  e.preventDefault();
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let r;

  switch (op.value) {
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
  }

  resultado.textContent = `Resultado: ${r}`;
}
