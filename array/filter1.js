const produtos = [
    {'nome': 'Borracha', 'preco': 3.45, 'fragil': true},
    {'nome': 'Caneta', 'preco': 10.5, 'fragil': false},
    {'nome': 'Lapis', 'preco': 1.99, 'fragil': false},
    {'nome': 'Caderno', 'preco': 14.5, 'fragil': true},
]

// console.log(produtos.filter(function(p){
//     return p.fragil = true
// }))

const caro = produto => produto.preco >= 5
const fragil = produto => produto.fragil

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))
console.log(produtos.filter(fragil).filter(caro))