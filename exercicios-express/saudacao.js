function saudacao(nome){
    return function(req, res, next){
        console.log(`Welcomido ${nome}`)
        res.send(`Seja bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao