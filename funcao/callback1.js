const fabricantes = ["Dell", "Positivo", "Samsung"]
const tipos = ["Notebook", "Desktop", "Tablet", "Monitor"]

/* function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

tipos.forEach(imprimir) */

//tipos.forEach(a => console.log(a))
tipos.forEach( (a,i) => console.log(`${i + 1}. ${a}`))