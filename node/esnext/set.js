// não aceita repetição /não indexada
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times)
console.log(times.has('Flamengo'))

const nomes = ['Taianne', 'Thais', 'Najulia']
const nomesSet = new Set(nomes)
console.log(nomesSet)