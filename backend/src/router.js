// importar o express
const express = require("express");
// import express from 'express'

// importar os controllers e Middleweres
const userControl = require("./controller/userController");
const petControl = require("./controller/petController");
const userMiddleweres = require("./middlewares/userMiddlewares");

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

// Rotas para pets
router.get("/pet", petControl.getAllPet);
router.post("/pet", petControl.createPet);
router.delete("/pet/:id_pet", petControl.removePet);

// exportar as rotas
module.exports = router;
