const numero1 = 10
const numero2 = 20
const numero3 = 30

let mayor 
if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2
} else {
    mayor = numero3
}
console.log("El numero mayor es " + mayor)

let menor
if (numero1 <= numero2 && numero1 <= numero3) {
    menor = numero1
} else if (numero2 <= numero1 && numero2 <= numero1) {
    menor = numero2
} else {
    menor = numero3
}
console.log("El numero menor es " + menor)

if (numero1 % 2 === 0) {
    console.log("Numero 1 es par")
} else {
    console.log("Numero 1 es impar")
}

if (numero2 % 2 === 0) {
    console.log("Numero 2 es par")
} else {
    console.log("Numero 2 es impar")
}

if (numero3 % 2 === 0) {
    console.log("Numero 3 es par")
} else {
    console.log("Numero 3 es impar")
}

if (numero1 % 5 === 0) {
    console.log("Numero 1 es multiplo de 5")
} else {
    console.log("Numero 1 no es multiplo de 5")
}

if (numero2 % 5 === 0) {
    console.log("Numero 2 es multiplo de 5")
} else {
    console.log("Numero 2 no es multiplo de 5")
}

if (numero3 % 5 === 0) {
    console.log("Numero 3 es multiplo de 5")
} else {
    console.log("Numero 3 no es multiplo de 5")
}