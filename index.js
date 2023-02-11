const registrar = (nuevo) => {
    nuevo.preventDefault()
    //console.log(nuevo)
    let data = new FormData(nuevo.target)

    let valorInput = data.get("registro")
    let indiceEliminar = parseInt(data.get("elimina"))
    console.log(valorInput , indiceEliminar)

    let divResultado = document.querySelector("#seccion-resultado")
    console.log(divResultado,divResultado.childNodes.length-1)
    //divResultado.innerHTML = "<h1>"+valorInput+"</h1>"

    let elementoH1 = document.createElement("li") //tenemos en elementoH1 una etiqueta <h1></h1>
    elementoH1.appendChild(document.createTextNode(`${divResultado.childNodes.length-1}-. ${valorInput}`))
    elementoH1.setAttribute("id", `${divResultado.childNodes.length-1}` );

    divResultado.appendChild(elementoH1)

}

const eliminarLista = () =>{
    let divResultado = document.querySelector("#seccion-resultado")
    while (divResultado.firstChild) {
        console.log("Borrando: ", divResultado.innerHTML)
        divResultado.removeChild(divResultado.firstChild);
    }
}

const eliminarPrimero = () =>{
    let divResultado = document.querySelector("#seccion-resultado")
    if(divResultado.firstChild) {        
        divResultado.removeChild(divResultado.firstChild);
    }
}

const eliminarUltimo = () =>{
    let divResultado = document.querySelector("#seccion-resultado")
    if(divResultado.lastChild) {        
        divResultado.removeChild(divResultado.lastChild);
    }

}

const eliminarEspecifico = () => {
    let valorInput = document.querySelectorAll("input")
    //console.log(valorInput)
    let texto = valorInput[valorInput.length-1]["value"]
    //console.log(valorInput[valorInput.length-1]["value"])
    let divResultado = document.querySelector("#seccion-resultado")
    //console.log(divResultado.childNodes)

    for(let i=0; i< divResultado.childNodes.length; i++){
        
        let textoLI = String(divResultado.childNodes[i].innerHTML)
        if(textoLI.includes(texto)){
            divResultado.removeChild(divResultado.childNodes[i]) //borra específicamente el texto que incluya la frase
        }
    }
}

window.onload = () => {
    let formulario = document.querySelector("#formulario")
    formulario.addEventListener("submit", registrar)
}