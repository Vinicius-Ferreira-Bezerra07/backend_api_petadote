const petRepo = require("../repository/petRepo");

const getAllPet = async () => {
    const pet = await petRepo.getAllPet();

    return pet;
};

const createPet = async (pet) => {
    const addPet = await petRepo.createPet(pet);

    return addPet;
};

const removePet = async (id) => {
    const remove = petRepo.removePet(id);

    return remove;
};

const findPetIdUser = async (id) => {
    const pets = petRepo.findPetIdUser(id);

    return pets;
};

module.exports = {
    getAllPet,
    createPet,
    removePet,
    findPetIdUser,
};
