const adocaoRepo = require("../repository/adocaoRepo");

const getAllAdocao = async () => {
    const adocao = await adocaoRepo.getAllAdocao();

    return adocao;
};

const createAdocao = async (adocao) => {
    const addAdocao = await adocaoRepo.createAcocao(adocao);

    return addAdocao;
};

const removeAdocao = async (idAdocao) => {
    const removeAdocao = await adocaoRepo.removeAdocao(idAdocao);

    return removeAdocao;
};

const findById = async (id) => {
    const adocao = adocaoRepo.findById(id);

    return adocao;
};

module.exports = {
    getAllAdocao,
    createAdocao,
    removeAdocao,
    findById,
};
