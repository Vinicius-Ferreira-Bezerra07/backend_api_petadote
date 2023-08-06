// const { response } = require("express");
const petServ = require("../service/petService");

const getAllPet = async (_req, res) => {
    const pet = await petServ.getAllPet();

    return res.status(200).json(pet);
};

const getById = async (id) => {
    const pet = await petServ.getById(id);

    return res.status(200).json(pet);
};

const createPet = async (req, res) => {
    const addPet = await petServ.createPet(req.body);

    return res.status(200).json(addPet);
};

const removePet = async (req, res) => {
    const { id_pet } = req.params;

    await petServ.removePet(id_pet);

    return res.status(204).json();
};

const updatePet = () => {};

const findPetIdUser = (req, res) => {
    const { id } = req.params;

    const pets = petServ.findPetIdUser(id);

    return res.status(200).json(pets);
};

module.exports = {
    getAllPet,
    createPet,
    removePet,
    updatePet,
    findPetIdUser,
};
