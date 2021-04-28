const express = require('express')
require('dotenv').config()

const app = express()
app.disable('x-powered-by') //Remove o Powered-By Express
//Porta default do servidor web
const PORT = process.env.PORT

app.use(express.json()) //Iremos fazer o parse do JSON

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API 100% funcional! 👏',
        versao: '1.0.0'
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Servidor Web rodando na porta ${PORT}`)
})

//Rota para tratar erro 404
app.use(function(req, res) {
    res.status(404).json({mensagem: `A rota ${req.originalUrl} informada não exite`})
})