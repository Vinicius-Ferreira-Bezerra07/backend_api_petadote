// const { response } = require("express");
const petServ = require("../service/petService");

const getAllPet = async (_req, res) => {
    const pet = await petServ.getAllPet();

    return res.status(200).json(pet);
};

const getById = async () => {};

const createPet = async (req, res) => {
    const addPet = await petServ.createPet(req.body);

    return res.status(200).json(addPet);
};

const removePet = async (req, res) => {
    console.log("1.1");
    const { id_pet } = req.params;

    await petServ.removePet(id_pet);
    console.log("2.1");
    return res.status(204).json();
};

const updatePet = () => {};

module.exports = {
    getAllPet,
    createPet,
    removePet,
    updatePet,
};
