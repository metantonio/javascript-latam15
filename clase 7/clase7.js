// Operadores ternarios
// estructura:
// pelota == "pelota"  && boleano == true ? true : false

let pelota = "pelota"
let boleano = true
const flecha = () => {
    return 10
}

let resultado = !boleano ? flecha() : 5

//console.log(resultado)


//Destructuración
let arr = ["hola", 1, 2, 3]
let hola = arr[0]
//console.log(hola)

let [a, b, numero2, d] = ["hola", 1, 2, 3] // destructurar arreglos
//console.log(a)
let obj = { nombre: "Antonio", edad: 34, direccion: "av.....", estudios: "...." }
let { estudios, nombre } = { nombre: "Antonio", edad: 34, direccion: "av.....", estudios: "...." }
//console.log(estudios, nombre)

let obj2 = {
    prop1: "Elemento",
    prop2: "Tipo",
    prop3: {
        prop31: "ss",
        prop32: "aa",
        prop33: {
            nombre: "Antonio",
            edad: 34
        }
    }
}

const funcionEjemplo = (obj) => {
    console.log(obj2["prop1"], obj2["prop2"], obj["prop3"]["prop31"], obj["prop3"]["prop32"], obj["prop3"]["prop33"]["nombre"], obj["prop3"]["prop33"]["edad"])
}

const mejorada = ({ prop1, prop3 }) => {
    let { prop31, prop32, prop33 } = prop3
    let {nombre, edad} = prop33
    console.log("Resultado mejorado: ", prop1, prop31, prop32, nombre, edad)
}

funcionEjemplo(obj2)
mejorada(obj2)