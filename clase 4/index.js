const prueba = () => {
    alert("Presionado el botón")
}

const btonSubmit = (e) => {
    e.preventDefault() //previene la recarga natural de la página por el botón submit
    alert("formulario")
    console.log(e)
    let data = new FormData(e.target) //creando un objeto del tipo Formulario, y la información del formulario es evento.target
    let nombre = data.get("nombre") //método .get(), los inputs deben tener un atributo name
    let edad = data.get("edad") 

    alert(`Bienvenido, ${nombre}, de edad: ${edad}`)

}

window.onload=()=>{
    alert("me recargué")
    console.log("hola")
    let boton = document.querySelector("#btn-prueba")
    boton.addEventListener("click", ()=>prueba())

    let formulario = document.querySelector("#form-submit")
    formulario.addEventListener("submit", btonSubmit)
}

