const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista__tareas");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await respuesta.json();
    const completadas = datos.filter(tarea => tarea.completed);

    lista.innerHTML = "";
    completadas.forEach(tarea => {
      const li = document.createElement("li");
      li.textContent = `${tarea.title} `;
      lista.appendChild(li);
    });
  } catch (error) {
    lista.innerHTML = "<li>Error al cargar las tareas.</li>";
  }
});
