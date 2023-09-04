const endpoint = "https://jsonplaceholder.typicode.com/users"
const inputName = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputFecha = document.getElementById("inputFecha")
const button = document.getElementById("button")

button.addEventListener("click", (event) => {
  event.preventDefault()
  const datos = {
    nombre: inputName.value,
    apellido: inputApellido.value,
    fecha: inputFecha.value
  }
  fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
})
