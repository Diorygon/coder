const aprovados = ['Aprovado1','Aprovado2','Aprovado3','Aprovado4',]

aprovados.forEach(function(nome, i, array){
    console.log(`${i +1}) ${nome}`)
    // console.log(array) 
})

console.log('')

aprovados.forEach(nome => console.log(nome))

console.log('')

const exibirAprovados = (aprovado,i) => console.log(`${i +1}) ${aprovado}`)
aprovados.forEach(exibirAprovados)

