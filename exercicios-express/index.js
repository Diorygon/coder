const express = require('express');
const app = express();

const saudacao = require('./saudacao')

//app.use(saudacao('Diego'))

app.get('/clientes/relatorio', (req, res) =>{
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) =>{
    res.send(`Cliente ${req.params.id} foi selecionado!`)
}) 

app.get('/opa',(req,res) => {
    res.send('Estou <strong>bem</strong>!')
})

app.get('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })

    req.on('end', function(){
        res.send(corpo)
        //res.json(JSON.parse(corpo))
    })
})

app.use('/json',(req,res) => {
    res.json({
        data:[
        {id:7, name: 'Ana', position: 1},
        {id:34, name: 'Joao', position: 2},
        {id:73, name: 'Maria', position: 3}
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200    
    })
})

app.listen(3000, () =>{
    console.log('Backend executando...')
})