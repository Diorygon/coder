class Pessoa{
    constructor(nome, idade,){
        this.nome = nome
        this.idade = idade
    }
    
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
    // falarIdade(){
    //     console.log(`Tenho ${this.idade} anos :D`)
    // }
}

const p1 = new Pessoa('Joao', 27)
p1.falar()
//p1.falarIdade()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa('Maria')
p2.falar()