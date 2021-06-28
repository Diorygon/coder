const alunos = [
    { nome: 'Joao', nota: 10, bolsista: false},
    { nome: 'Maria', nota: 5, bolsista: true},
    { nome: 'Pedro', nota: 4, bolsista: false},
    { nome: 'Thiago', nota: 9, bolsista: false},
    { nome: 'Lucas', nota: 7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)