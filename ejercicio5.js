for (let i = 0; i < 11; i++) {
    console.log(i)
}

console.log("--------------------------")

for (let i = 10; i > -1; i--) {
    console.log(i)
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0){
        console.log(i)
    }
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0){
        console.log(i)
    }
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if (i % 3 == 0 && i != 0){
        console.log(i)
    }
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if (i % 5 == 0 && i != 0){
        console.log(i)
    }
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if (i % 5 == 0 && i % 3 == 0 && i != 0){
        console.log(i)
    }
}

console.log("--------------------------")

for (let i = 0; i < 11; i++) {
    if ((i % 5 == 0 || i % 3 == 0) && (i!= 0)){
        console.log(i)
    }
}