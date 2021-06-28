Array.prototype.forEach2 = function(callback){
    for (let i = 0; i <this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Aprovado1','Aprovado2','Aprovado3','Aprovado4',]

const exibirAprovados = (aprovado,i) => console.log(`${i +1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)