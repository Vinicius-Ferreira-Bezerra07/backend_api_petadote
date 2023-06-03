// importar a camada de Serviço
// const userRepo = require("../repository/userRepo");

const getAllUser = (req, res) => {
    return res.status(200).json({ message: "service esta funcionando" });
};

module.exports = {
    getAllUser,
};
