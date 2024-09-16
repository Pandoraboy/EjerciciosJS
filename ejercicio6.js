function mayuscula (palabra){
    return palabra.toUpperCase()
}

function minuscula (palabra){
    return palabra.toLowerCase()
}

let palabra = "Hola Mundo"
let palabramayuscula = mayuscula(palabra)
console.log(palabramayuscula)

let palabraminuscula = minuscula(palabra)
console.log(palabraminuscula)

let numero1 = 10
let numero2 = 20

function resta (numero1,numero2){
    return numero1 - numero2
}

function division (numero1,numero2){
    return numero1 / numero2
}

function multiplicacion (numero1,numero2){
    return numero1 * numero2
}

function largo (palabra){
    return palabra.length
}

console.log(resta(numero1,numero2))
console.log(division(numero1,numero2))
console.log(multiplicacion(numero1,numero2))
console.log(largo(palabra))