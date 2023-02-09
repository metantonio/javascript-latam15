let arreglo = ["hola", "soy", "Antonio"]

let copia = arreglo.slice(0, 2)
//console.log(arreglo.length)

//método map (es sólo válido en arreglos)
//repaso de las funciones flechas (arrow function)
const nombreDeLaFuncion = (a,b) => {
    console.log(a,b)
}
//nombreDeLaFuncion("Hola ", "mundo!")
let i=0;
let temp = []
let obj= {} //{0:0, 1:1, ..... 5:5}
let texto=""
let prueba =arreglo.map((item, index, arr)=>{
    texto = "<li>"+item+"</li>"
    return texto
}) //un .map() siempre retorna un arreglo

console.log("prueba: ", prueba)