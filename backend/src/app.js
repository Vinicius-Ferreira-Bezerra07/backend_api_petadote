// importação da biblioteca express
const express = require("express");

// importação do cors / funciona para restrigir/liberar acesso a api
const cors = require("cors");

// importando as rotas
const router = require("./router");

// inicialização do app
const app = express();

// indica ao app que ele precisa lidar com o formato JSON
app.use(express.json());

//restrição de acesso
app.use(cors());

// indica ao app o arquivo que contem as rotas
app.use(router);

// exporta o app para ser usado no server
module.exports = app;
