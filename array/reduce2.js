const alunos = [
    { nome: 'Joao', nota: 10, bolsista: false},
    { nome: 'Maria', nota: 5, bolsista: true},
    { nome: 'Pedro', nota: 4, bolsista: false},
    { nome: 'Thiago', nota: 9, bolsista: false},
    { nome: 'Lucas', nota: 7, bolsista: true},
]

//Todos os alunos são bolsistas ? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))