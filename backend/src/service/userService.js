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

module.exports = {
    getAllUser,
    createUser,
};
