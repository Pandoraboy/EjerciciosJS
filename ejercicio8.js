const persona = {
    nombre: "Nicolas", 
    edad: 22, 
    direccion: { 
      ciudad: "Concepcion", 
      pais: "Chile" 
    },
    genero: "Masculino"
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.direccion.ciudad)
console.log(persona.direccion.pais)
console.log(persona.genero)

const caja = {
    cuadernos: 12,
    lapices: 25,
    papel: 100,
    fotografias: 5,
    estado: true
}

console.log(caja)
console.log(caja.cuadernos)
console.log(caja.lapices)
console.log(caja.papel)
console.log(caja.fotografias)
console.log(caja.estado)
console.log(typeof caja.cuadernos)
console.log(typeof caja.lapices)
console.log(typeof caja.papel)
console.log(typeof caja.fotografias)
console.log(typeof caja.estado)