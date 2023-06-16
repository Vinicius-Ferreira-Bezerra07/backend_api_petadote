// importar a camada de Serviço
// const userServ = require('../')
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

const removeUser = () => {};

const updateUser = () => {};

module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
};
