// importar o express
const express = require('express')
// import express from 'express'

// importar as rotas
const userControl = require('./controller/userController')

// criar o arquivo e rotas
const router = express.Router()

// Rotas
router.get('/', (req, res) => res.status(200).send('As rotas estão funcionando'))

// Rotas para usuario 
router.get('/user', userControl.getAllUser)
router.post('/user', userControl.createUser)


// exportar as rotas
module.exports = router