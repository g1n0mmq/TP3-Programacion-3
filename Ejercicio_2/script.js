const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

const form = document.getElementById("formulario");
const inputPalabra = document.getElementById("inputPalabra");
const resultado = document.getElementById("resultado");
const listaOriginal = document.getElementById("listaOriginal");

mostrarListaOriginal();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = inputPalabra.value.trim().toLowerCase();

  if (texto === "") {
    resultado.innerHTML = `<p class="error">Por favor, ingrese una palabra para filtrar.</p>`;
    return;
  }

  const filtradas = palabras.filter(p => p.toLowerCase().includes(texto));

  if (filtradas.length === 0) {
    resultado.innerHTML = `<p>No se encontraron coincidencias.</p>`;
  } else {
    resultado.innerHTML = `
      <ul>
        ${filtradas.map(p => `<li>${p}</li>`).join("")}
      </ul>
    `;
  }
});

function mostrarListaOriginal() {
  listaOriginal.innerHTML = palabras.map(p => `<li>${p}</li>`).join("");
}
