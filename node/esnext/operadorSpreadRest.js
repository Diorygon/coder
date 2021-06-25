// operador ... rest(juntar)/spread(espalhar)

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.66}
const clone = {ativo: true, ...funcionario}

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)

