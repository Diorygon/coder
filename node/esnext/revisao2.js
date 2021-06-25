// Arrow Function
const soma = (a, b) => a + b

// que pode ser
// const soma = (a, b) => {
//     return a + b
// } 

console.log(soma(2,3))


// Arrow function (this)
const lexico = () => console.log(this === exports)

// Parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()

//operador rest 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}
console.log(total(2,3,4,5,6,7,8))

