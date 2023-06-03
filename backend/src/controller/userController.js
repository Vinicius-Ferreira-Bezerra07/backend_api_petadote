// importar a camada de Serviço
// const userServ = require('../')
const userServ = require("../service/userService");

const getAllUser = async (req, res) => {
    // return res.status(200).json({ message: 'controller esta funcionando' })
    const user = await userServ.getAllUser();
    // return res.status(200).json(user);
    return user;
};

const createUser = async (req, res) => {
    const addUser = await userRepo.createUser(user);

    return res.status(201).json({ mensagem: "Cadastrado com sucesso!" });
    // return res.status(201).json({ mensagem: 'OK' })
};

const removeUser = () => {};

const updateUser = () => {};

module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
};
