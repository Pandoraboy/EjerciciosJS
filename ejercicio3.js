const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if (numero1 > numero2) {
    console.log("numero1 es mayor que numero2");
} else if (numero1 < numero2) {
    console.log("numero1 es menor que numero2");
} else {
    console.log("numero1 es igual a numero2");
}

if (numero1 > numero3) {
    console.log("numero1 es mayor que numero3")
} else if (numero1 < numero3) {
    console.log("numero1 es menor que numero3");
} else {
    console.log("numero1 es igual a numero3");
}

if (numero3 > numero2) {
    console.log("numero3 es mayor que numero2")
} else if (numero3 < numero2) {
    console.log("numero3 es menor que numero2");
} else {
    console.log("numero3 es igual a numero2");
}

if (numero3 !== numero1) {
    console.log("numero3 es estrictamente diferente a numero1")
} else {
    console.log("numero3 es estrictamente igual que numero1");
}

if (numero1 == numero2) {
    console.log("numero1 es estrictamente igual que numero2")
} else {
    console.log("numero1 es estrictamente diferente a numero2");
}