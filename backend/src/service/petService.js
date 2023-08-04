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
    console.log("1.2");
    const remove = petRepo.removePet(id);
    console.log("2.2");
    return remove;
};

module.exports = {
    getAllPet,
    createPet,
    removePet,
};
