// importar a camada de Serviço
const userRepo = require("../repository/userRepo");

const getAllUser = () => {
    // return res.status(200).json({ message: "service esta funcionando" });
    const user = userRepo.getAllUser();
    return user;
};

module.exports = {
    getAllUser,
};
