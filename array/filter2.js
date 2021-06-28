Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

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

console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))
console.log(produtos.filter2(fragil).filter2(caro))