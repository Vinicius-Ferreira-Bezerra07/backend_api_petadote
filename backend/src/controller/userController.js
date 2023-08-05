// importar a camada de Serviço
// const userServ = require('../')
// const { response } = require("express");
const userServ = require("../service/userService");

const getAllUser = async (_req, res) => {
    // return res.status(200).json({ message: 'controller esta funcionando' })
    const user = await userServ.getAllUser();
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const addUser = await userServ.createUser(req.body);

    return res.status(201).json(addUser);
    // return res.status(201).json(req.body);
};

const removeUser = async (req, res) => {
    const { id } = req.params;

    await userServ.removeUser(id);
    return res.status(204).json();
};

const updateUser = () => {};

const validateUser = async (req, res) => {
    const dados = await userServ.validarUser(req.body);
    const { email, senha } = req.body;
    const { emailBd = email, senhaBd = senha } = dados;

    // console.log(email, senha);
    // console.log(emailBd, senhaBd);

    console.log(email == emailBd);
    console.log(senha == senhaBd);

    if (email == emailBd) {
        if (senha == senhaBd) {
            return res
                .status(200)
                .json({ msg: "Sucesso na validação", validation: "true" });
        } else {
            return res
                .status(400)
                .json({ Erro: "Senha invalido.", validation: "false" });
        }
    } else {
        return res
            .status(400)
            .json({ Erro: "Email invalido.", validation: "false" });
    }
};

module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
    validateUser,
};
