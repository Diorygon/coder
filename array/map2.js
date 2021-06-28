const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caneta", "preco": 10.5}',
    '{"nome": "Lapis", "preco": 1.99}',
    '{"nome": "Caderno", "preco": 14.5}',
]

//Retornar um array apenas com os precos
const nums = []
console.log(carrinho.forEach(e => `${e}`))

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto)//.map(apenasPreco)
console.log(resultado)