const valor = 'Global'

function minhaFuncao(){
    // const valor = 'Local'
    console.log(valor)
}

function exec(){
    //a variável será procurada onde a função foi definida
    const valor = 'Local'
    minhaFuncao()
}

exec()