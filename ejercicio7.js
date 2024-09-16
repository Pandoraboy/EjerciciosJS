function sumarMatriz(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
    }
    return suma
}

const matriz = [1, 2, 3, 4, 5]
console.log(sumarMatriz(matriz))

function PromedioMatriz(numeros) {
    if (numeros.length === 0) {
      return 0
    }
  
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i]
    }
    const promedio = suma / numeros.length
    return promedio
  }

console.log(PromedioMatriz(matriz))

function ArrayMayusculas(arrayDeStrings) {
    const nuevoArray = []
    for (let i = 0; i < arrayDeStrings.length; i++) {
      nuevoArray.push(arrayDeStrings[i].toUpperCase())
    }
    return nuevoArray
}

const strings = ["Hola", "Mundo", "javascript", "ISW"];
console.log(ArrayMayusculas(strings))

function NumerosPares(arrayDeNumeros) {
    const numerosPares = []
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      if (arrayDeNumeros[i] % 2 === 0) {
        numerosPares.push(arrayDeNumeros[i])
      }
    }
    return numerosPares
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(NumerosPares(numeros))
