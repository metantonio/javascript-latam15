
let who = ["yo", "el" , "el perro"]
let what = ["pasearon", "se fueron", "durmieron"]
let where = ["piscina", "salón de clases", "teatro"]

//funcionalidades que se repiten, hay que crear funciones
const calcularNroRandom = (arreglo) => {
    let numeroAleatorio = Math.floor(Math.random()*arreglo.length)
    return arreglo[numeroAleatorio]
}
//f-string

const imprimir = () => {
    let texto = `${calcularNroRandom(who)}, ${calcularNroRandom(what)}, ${calcularNroRandom(where)}, después de la fiesta.`
    let div = document.querySelector("#excuse")
    div.innerHTML= texto
}