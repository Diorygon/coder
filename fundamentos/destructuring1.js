const pessoa = {

    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: namee, idade: age} = pessoa
console.log(age, namee)