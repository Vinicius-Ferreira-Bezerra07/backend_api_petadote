const connection = require("./connection");

const getAllPet = async () => {
    const [pet] = await connection.execute("SELECT * FROM pet");

    return pet;
};

const createPet = async (pet) => {
    const {
        id_user,
        nome,
        raca,
        especie,
        cor,
        status,
        peso,
        data_nascimento,
        sexo,
        descricao,
    } = pet;

    const query =
        "INSERT INTO pet (id_user, nome, raca, especie, cor, status, peso, data_nascimento, sexo, descricao) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const [createPet] = await connection.execute(query, [
        id_user,
        nome,
        raca,
        especie,
        cor,
        status,
        peso,
        data_nascimento,
        sexo,
        descricao,
    ]);

    return { insertId: createPet.insertId };
};

const removePet = async (id_pet) => {
    const query = "DELETE FROM pet WHERE id_pet = (?)";

    const removePet = await connection.execute(query, [id_pet]);

    return removePet;
};

const updatePet = async (id) => {};

const findPetIdUser = async (id) => {
    const pets = await connection.execute(
        "SELECT * FROM pet WHERE id_user = (?)",
        [id]
    );

    return pets;
};

module.exports = {
    getAllPet,
    createPet,
    removePet,
    updatePet,
    findPetIdUser,
};

// CREATE TABLE
//     pet (
//         id_pet INT NOT NULL AUTO_INCREMENT,
//         id_user INT NOT NULL,
//         nome VARCHAR(50) NOT NULL,
//         raca VARCHAR(30) NOT NULL,
//         especie VARCHAR(20) NOT NULL,
//         cor VARCHAR(10) NOT NULL,
//         status VARCHAR(20) NOT NULL,
//         peso FLOAT NOT NULL,
//         data_nascimento DATE NOT NULL,
//         sexo VARCHAR(14) NOT NULL,
//         descricao VARCHAR(100) NOT NULL,
//         PRIMARY KEY (id_pet),
//         FOREIGN KEY (id_user) REFERENCES user (id_user)
//     );
