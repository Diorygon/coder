function criarProduto(nome, preco){
    const a = this.preco
    let calcularDesconto = function(a){
        if(preco < 1000){
            return 0.1
        }else if( preco < 1500){
            return 0.2
        }else{
            return 0.3
        }
    }
    return{
        nome,
        preco,
        desconto: calcularDesconto()
    }
}

comparaComThis = function(param){
    console.log(this === param)
}

console.log(criarProduto('Notebook', 2499.99));
console.log(criarProduto('Smartphone', 1499.99));
console.log(criarProduto('Tablet', 900.99))