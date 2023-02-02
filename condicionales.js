//Condicionales

//IF
let numero = 3

if(numero>=3){
    console.log("es mayor o igual a 3")
}else{
    console.log("es menor a 3")
}

let numero2 = 19

if(numero2>20){
    console.log("el número es mayor a 20")
    if(numero2>80){
        console.log("el número también es mayor a 80")
    }else{
        console.log("el número está entre 21 y 80")
    }
}else{
    console.log("el número es menor o igual a 20")
}

//comparaciones 
console.log("5>3? ",5>3)
console.log("5>=3? ",5>=3)
console.log("5<3? ",5<3)
console.log("5<=3? ",5<=3)

let numero3 = 25

//Ejemplo AND
if(numero3>20 && numero3>50){
    console.log("Te ganaste la lotería")
}else{
    console.log("Sigue intentando")
}

//Ejemplo OR (pipe)
if(numero3>20 || numero3>50){
    console.log("Te ganaste la lotería 2")
}else{
    console.log("Sigue intentando 2")
}

//Cómo recorrer un array o arreglo
let arreglo = ["hola", "mundo", "de", "4Geeks"]
//console.log(arreglo[0])
console.log("longitud del arrelgo: ", arreglo.length)

//CICLO FOR
for(let i=0; i<4; i=i+1){
    console.log(i)
}
//0
//1
//2
//3
arreglo.push("elemento agregado")
for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i])
}

console.log("\n ***************** \n For con of")
for(let elemento of arreglo){
    console.log(elemento) //este imprime el valor del elemento
}
console.log("\n ***************** \n For con in")
for(let indice in arreglo){
    console.log("El índice es: "+indice+" y su valor es: "+arreglo[indice]) //este imprime el índice del elemento
}

let obj = {
    nombre: "Antonio",
    apellido: "Martínez",
    edad: 35,
    numerosSuerte: [4, 5, 7]
}
console.log("\n ***************** \n For con in en objetos: \n")
for(let clave in obj){
    console.log("clave es: "+clave+" y su valor es: "+ obj[clave])
}

