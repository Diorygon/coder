const soma = function (x, y){
    return x+y;
}

const dimi = function (x, y){
    return x-y;
}

const mult = function (x, y){
    return x*y;
}

const divi = function (x, y){
    return x/y;
}

const imprimirResultado = function (a, b, operacao){
    console.log(operacao(a, b))
}


a = 50
b = 35

imprimirResultado(a,b, soma)
imprimirResultado(a,b, dimi)
imprimirResultado(a,b, mult)
imprimirResultado(a,b, divi)

imprimirResultado(a,b, function(x,y){
    return x-y
})

imprimirResultado(a,b, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('Opa!')
    }
}

pessoa.falar()