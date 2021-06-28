function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
    this.falarIdade = function(){
        console.log(`Tenho ${this.idade} anos :D`)
    }
}

const p1 = new Pessoa('Joao', 27)
p1.falar()
p1.falarIdade()