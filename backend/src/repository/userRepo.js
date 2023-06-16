// importar a conecção
const connection = require("./connection");

// metodo para buscar os usuarios no banco
const getAllUser = async () => {
    // return res.status(200).json({ message: 'repository esta funcionando' })
    const [user] = await connection.execute("SELECT * FROM user");
    return user;
};

const createUser = async (user) => {
    const { nome, email, endereco, cpf, data_nascimento, telefone, senha } =
        user;

    const query =
        "INSERT INTO user (nome, email, endereco, cpf, data_nascimento, telefone, senha) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [createUser] = await connection.execute(query, [
        nome,
        email,
        endereco,
        cpf,
        data_nascimento,
        telefone,
        senha,
    ]);

    return { insertId: createUser.insertId };
};

const removeUser = async (id) => {};

const updateUser = async (id) => {};

// exporta os restornos das funções definias aqui
module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
};
