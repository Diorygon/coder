const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.push('Joaozin') //adiciona elemento array na ultima posição
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona elemento array na primeira posição
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar com splice (na posição 2)
console.log(pilotos)
pilotos.splice(3, 1) //remove 1 na posiçaõ 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

