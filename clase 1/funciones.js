console.log(suma(4,4))
//console.log(multiplicacion(4,4)) //dará error

function suma(a, b){
    let resultado = a + b
    console.log("dentro de la función:", resultado)
    return resultado
}

console.log("fuera de función: ",suma(2, 2))

let resultadoDeLaSuma = suma(5,5)
console.log(resultadoDeLaSuma)




const multiplicacion = (a, b) => {
    let resultado = a * b;
    return resultado
}

let resultadoMultiplicacion = multiplicacion(3, 3)
console.log("3*3= ",resultadoMultiplicacion)

module.export.multiplicacion = multiplicacion