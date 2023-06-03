// importação da biblioteca express
const express = require('express')

// importando as rotas
const router = require('./router')

// inicialização do app
const app = express()

// indica ao app o arquivo que contem as rotas
app.use(router)

// exporta o app para ser usado no server
module.exports = app