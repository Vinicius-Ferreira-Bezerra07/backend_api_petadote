const adocaoServ = require("../service/adocaoService");

const getAllAdocao = async (_req, res) => {
    const adocao = await adocaoServ.getAllAdocao();

    return res.status(200).json(adocao);
};

const getById = async (req, res) => {
    const { id } = req.params;

    const adocao = await adocaoServ.findById(id);

    return res.status(200).json(adocao);
};

const createAdocao = async (req, res) => {
    const addAdocao = await adocaoServ.createAdocao(req.body);
    console.log(addAdocao);
    return res.status(200).json(addAdocao);
};

const updateAdocao = async (req, res) => {};

const removeAdocao = async (req, res) => {
    const { id } = req.params;

    await adocaoServ.removeAdocao(id);
    res.status(204).json();
};

module.exports = {
    getAllAdocao,
    getById,
    createAdocao,
    updateAdocao,
    removeAdocao,
};
