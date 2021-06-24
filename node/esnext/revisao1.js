// let e const
{
    var a = 2
    let b = 3
}
console.log(a) //funciona, var nao tem escopo de bloco
//console.log(b) //nao funciona let tem escopo de bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`) //pode quebrar linha

// Destructuring
const[l, e, ...tras] = "Cod3r"
console.log(l, e, ...tras)

const [x, ,y] = [1, 2, 3]
console.log(x,y)

const{idade, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)