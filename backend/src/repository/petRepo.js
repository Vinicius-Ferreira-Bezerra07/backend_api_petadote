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
    console.log("1.3");
    const query = "DELETE FROM pet WHERE id_pet = ?";

    const removePet = await connection.execute(query, [id_pet]);
    console.log("2.3");
    return removePet;
};

const updatePet = async (id) => {};

const findPetIdUser = async (id) => {
    const pets = await connection.execute(
        "SELECT * FROM pet WHERE id_user = (?)",
        [id]
    );
};

module.exports = {
    getAllPet,
    createPet,
    removePet,
    updatePet,
    findPetIdUser,
};

// id_pet int NOT NULL AUTO_INCREMENT,
// id_user int NOT NULL,
// nome varchar(50) NOT NULL,
// raca varchar(30) NOT NULL,
// especie VARCHAR(20) NOT NULL,
// cor VARCHAR(10) NOT NULL,
// status VARCHAR(20) NOT NULL,
// peso int NOT NULL,
// data_nascimento DATE NOT NULL,
// sexo VARCHAR(14) NOT NULL,
// descricao VARCHAR(100) NOT NULL,
// PRIMARY KEY (id_pet),
// Foreign Key (id_user) REFERENCES user (id_user)
