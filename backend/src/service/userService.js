// importar a camada de Serviço
const userRepo = require("../repository/userRepo");

const getAllUser = async () => {
    // return res.status(200).json({ message: "service esta funcionando" });
    const user = await userRepo.getAllUser();
    return user;
};

const createUser = async (user) => {
    const addUser = await userRepo.createUser(user);

    return addUser;
};

const removeUser = async (id) => {
    const remove = userRepo.removeUser(id);

    return remove;
};

const validarUser = async (usuario) => {
    const dados = await userRepo.validarUser(usuario);

    return dados;
};

const findById = async (id) => {
    const user = await userRepo.findById(id);

    return user;
};

module.exports = {
    getAllUser,
    createUser,
    removeUser,
    // updateUser,
    validarUser,
    findById,
};
