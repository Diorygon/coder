const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Diego',
        nota: '10'
    }, {
        nome: 'Vinicius',
        nota: 5
    }]
},{
    nome: 'Turma M2',
    alunos:[{
        nome: 'Joazinho',
        nota: '0'
    }, {
        nome: 'Luan',
        nota: 2
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)
