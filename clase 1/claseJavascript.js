//console.log("Hola mundo 4Geeks!")

//Variables
var variable1 = "hola"
variable1 = "adiós"
variable1 = "Buenos días"
console.log("variable1: " + variable1)

let variable2 = "Mundo" //Alcance
variable2 = "Sol"
console.log("variable2: " + variable2)

const variable3 = 3.1415; //una vez declaradas no pueden cambiar su valor
console.log("variable3: " + variable3)

//Tipos de datos:
let variableString = "soy una variable del tipo cadena de texto";
console.log(variableString + ", tipo: " + typeof (variableString))

let variableNumber = 4
console.log(variableNumber + ", tipo: " + typeof (variableNumber))

let variableFloat = 4.15
console.log(variableFloat + ", tipo: " + typeof (variableFloat))

let numeroTexto = "50.23"
let numeroConvertido = parseFloat(numeroTexto) //conversión de texto a número
console.log(numeroConvertido + ", tipo: " + typeof (numeroConvertido))

//Arreglos o Arrays
let arreglo1 = [1, "Hola", "Mundo", 4]
console.log("arreglo1: ", arreglo1)
console.log("arreglo1, indice" + " 0, el valor es: " + arreglo1[0])
console.log("arreglo1, indice" + " 2, el valor es: " + arreglo1[2])
console.log("arreglo1, indice" + " 4, el valor es: " + arreglo1[4])

arreglo1.push(50) //agrega al final del arreglo
console.log("arreglo1: ", arreglo1)
console.log("arreglo1, indice" + " 4, el valor es: " + arreglo1[4])

arreglo1.unshift(40) //unshift agrega al inicio del arreglo
console.log("arreglo1: ", arreglo1)

arreglo1.pop() //borra el último elemento del arreglo
console.log("arreglo1 despueés del pop(): ", arreglo1)

arreglo1.shift() //borra el primer elemento del arreglo
console.log("arreglo1 despueés del shift(): ", arreglo1)

let arreglo2 = arreglo1.slice(1, 3) //hace una copia de arreglo desde el índice 1 hasta el 3 sin incluirlo
console.log("arreglo2 despueés del slice(): ", arreglo2)

//booleanos
let verdadero = true
let falso = false
console.log(verdadero, falso)

//objetos
let obj = {
    nombre: "Antonio",
    apellido: "Martínez",
    edad: 35,
    numerosSuerte: [4, 5, 7]
}

console.log(obj)
console.table(obj)
console.log("edad: ", obj["edad"])
console.log("edad: ", obj.edad)
obj["edad"] = 30
obj["numerosSuerte"][2]=8
obj["numerosSuerte"].push(9)
console.table(obj)