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
    const { usuario, password } = req.body;
    console.log("Teste");
    const dados = await userServ.validarUser(req.body);
    console.log("Teste");
    if (dados.length > 0) {
        const [{ email, senha }] = dados;
        console.log("1");

        // console.log(login, password);
        console.log(email, senha);

        if (usuario == email) {
            console.log("2");
            if (password == senha) {
                console.log("Sucesso");
                return res.status(200).json({
                    msg: "Sucesso na validação",
                    validation: "true",
                    dados,
                });
            } else {
                return res
                    .status(200)
                    .json({ Erro: "Senha invalido.", validation: "false" });
            }
        } else {
            return res
                .status(200)
                .json({ Erro: "Email invalido.", validation: "false" });
        }
    } else {
        return res
            .status(400)
            .json({ Erro: "Email invalido.", validation: "false" });
    }
};

const findById = async (req, res) => {
    const { id } = req.params;

    const user = userServ.findById(id);

    return res.status(200).json(user);
};

module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
    validateUser,
    findById,
};
