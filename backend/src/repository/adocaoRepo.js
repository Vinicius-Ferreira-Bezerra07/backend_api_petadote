const connection = require("./connection");

const getAllAdocao = async () => {
    const [adocao] = await connection.execute("SELECT * FROM adocao");

    return adocao;
};

const createAcocao = async (adocao) => {
    const { id_adoc, id_pet, id_adotante, data_adocao } = adocao;

    const query =
        "INSERT INTO adocao (id_pet, id_adotante, data_adocao) VALUES (?, ?, ?)";

    const [crateAdocao] = await connection.execute(query, [
        id_adoc,
        id_pet,
        id_adotante,
        data_nascimento,
    ]);

    return { insertId: createAcocao.insertId };
};

const removeAdocao = async (id_adoc) => {
    const query = "DELETE FROM adocao WHERE id_adacao = (?)";

    const removeAdocao = await connection.execute(query, [id_adoc]);

    return removeAdocao;
};

const updateAdocao = async (id_adoc) => {};

const findById = async (id_adacao) => {
    const adocao = await connection.execute(
        "SELECT * FROM adocao WHERE id_adocao = (?)",
        [id_adacao]
    );

    return adocao;
};

module.exports = {
    getAllAdocao,
    createAcocao,
    removeAdocao,
    updateAdocao,
    findById,
};
