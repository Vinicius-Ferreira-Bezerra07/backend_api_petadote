// importar o express
const express = require("express");
// import express from 'express'

// importar os controllers e Middleweres
const userControl = require("./controller/userController");
const petControl = require("./controller/petController");
const adocaoControl = require("./controller/adocaoController");
const userMiddleweres = require("./middlewares/userMiddlewares");
const petMiddlewares = require("./middlewares/petMiddlewares");
const adocaoMiddlewares = require("./middlewares/adocaoMiddlewares");

// criar o arquivo e rotas
const router = express.Router();

// Rotas
router.get("/", (req, res) =>
    res.status(200).send("As rotas estão funcionando")
);

// Rotas para usuario
router.get("/user", userControl.getAllUser);
router.post("/user", userMiddleweres.validarCreateUser, userControl.createUser);
router.delete("/user/:id", userControl.removeUser);
router.get("/user/findid/:id", userControl.findById);

// Validação de Login
router.post(
    "/user/validate",
    userMiddleweres.validarValidacao,
    userControl.validateUser
);

// Rotas para pets
router.get("/pet", petControl.getAllPet);
router.post("/pet", petMiddlewares.validarCreatePet, petControl.createPet);
router.delete("/pet/:id_pet", petControl.removePet);
router.get("/pet/findiduser/:id", petControl.findPetIdUser);

// Rotas para Adoção
router.get("/adocao", adocaoControl.getAllAdocao);
router.post(
    "/adocao",
    adocaoMiddlewares.validarCreateAdocao,
    adocaoControl.createAdocao
);
router.delete("/adocao/:id_adocao", petControl.removePet);
router.get("/pet/findidAdocao/:id", petControl.findPetIdUser);

// exportar as rotas
module.exports = router;
