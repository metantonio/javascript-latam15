//Tipos de variables
//let, var, const

//tipos de datos
let texto = "Hola" //string dato primitivo
let numero = 3.14 //number (integer, float) dato primitivo
let booleanos = true //booleano, dato primitivo
let nulo = null  //dato primitivo
let indefinidos = undefined //dato primitivo

let arreglo = [1, "texto", {nombre: "David"}] //arrays, estructura objeto
let objetos = {
    edad: 34,
    nombre: "Antonio",
    familiares:[{nombre:"Samuel"}, {nombre:"Celeste", edad: 20}]
} //objetos, estructura objeto


//Copiando valores
let copiaTexto = texto
copiaTexto = " mundo!"
console.log(texto)
console.log(copiaTexto)
//que para los primitivos, la variable original y la copia son independientes

//copiar las estructuras de objetos
let copiaArreglo = arreglo
copiaArreglo.push(3)
console.log(arreglo)
console.log(copiaArreglo)

//manera 1 de copiar un arreglo (educativa)
let arregloTemp= []
for(let i=0 ; i<arreglo.length; i++){
    arregloTemp.push(arreglo[i])
}
arregloTemp.push("Cualquier cosa")
console.log("arreglo: ", arreglo)
console.log("arregloTemp: ", arregloTemp)

//manera 2 de copiar un array
let arregloTemp2 = arreglo.slice(1,3)
console.log("\n ***************** \n")
//arregloTemp2.push("verificando el cambio")
console.log("arreglo: ", arreglo)
console.log("arregloTemp2: ", arregloTemp2)

//manera de copiar objetos
let objDePrueba = {
    academia: "4Geeks",
    inicio: "18-01-23"
}

let copiaObj = objDePrueba
copiaObj.academia = "Google"
console.table(objDePrueba)
console.table(copiaObj)

//manera de copiar objetos
let copiaDefinitiva = JSON.stringify(objDePrueba) //convertir el obj en string
console.log(copiaDefinitiva)
copiaDefinitiva = JSON.parse(copiaDefinitiva) //convertimos el string a obj de javascript
console.log(copiaDefinitiva)