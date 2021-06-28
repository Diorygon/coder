console.log(
    typeof Array,
    typeof new Array, 
    typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados[0])
console.log(aprovados)

aprovados = ['Joao', 'Maria', 'Yuri']
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
console.log(aprovados.length)
aprovados.push('Joana')
console.log(aprovados.length)

aprovados[14] = 'Vinicius'
console.log(aprovados)
console.log(aprovados.length)
//indices entre 5 e 14 estão undefined

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Joao', 'Maria', 'Yuri']
aprovados.splice(1,1, 'Elemento1', 'Elemento2'   )
console.log(aprovados)

