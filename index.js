const hola = () => {
    console.log("hola")
}

window.onload=()=>{
    console.log("test, hola soy antonio")
    mensaje()
    hola()
    //alert("Se cargó por primera vez")
}

//DOM *!!!!!!!!!
function mensaje(){
    let divMensaje = document.querySelector("#usuario")
    divMensaje.innerHTML = "Lesther"

    let div2 = document.querySelectorAll(".texto")
    //console.log(div2)
    for(let i=0; i<div2.length; i++){
        console.log(div2[i].innerHTML)
        //div2[i].classList.add("texto-rojo")
        div2[i].innerHTML="<ul><li>"+div2[i].innerHTML+"</ul></li>"
    } 

    let app = document.querySelector("#app")
    let arrtemp = ["hola", "adiós", "tal vez"]

    arrtemp.map((item, index)=>{ //concatenando con f-string
        app.innerHTML += `<li key="${index}}"> ${item} </li>`
    })

    let aleatoria = Math.floor(Math.random()*arrtemp.length)
    console.log("aleatorio: ",arrtemp[aleatoria])
    divMensaje.innerHTML="<h1>"+arrtemp[aleatoria] +"</h1>"
}