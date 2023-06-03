// importa as funções do mysql2 que serve para fazer a conexão com o banco
const mysql = require('mysql2/promise')

// cria o objeto connection que faz a conexão com o banco
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'petadote'
})

module.exports = connection