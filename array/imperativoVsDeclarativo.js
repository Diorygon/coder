const alunos = [
    { nome: 'Joao', nota: 4.8, bolsista: false},
    { nome: 'Maria', nota: 5.4, bolsista: true},
    { nome: 'Pedro', nota: 4, bolsista: false},
    { nome: 'Thiago', nota: 9.8, bolsista: false},
    { nome: 'Lucas', nota: 7, bolsista: true},
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// select codigo, nome from clientes where ativo = 1
