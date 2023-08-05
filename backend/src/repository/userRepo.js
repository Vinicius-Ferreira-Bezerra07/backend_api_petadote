// importar a conecção
const connection = require("./connection");

// metodo para buscar os usuarios no banco
const getAllUser = async () => {
    // return res.status(200).json({ message: 'repository esta funcionando' })
    const [user] = await connection.execute("SELECT * FROM user");
    return user;
};

// metodo para cadastrar os usuarios no banco
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

// metodo para remocao de usuarios do banco
const removeUser = async (id) => {
    const query = "DELETE FROM user WHERE id_user = ?";

    const removeUser = await connection.execute(query, [id]);
    return removeUser;
};

// matodo para atualizar dados de usuario no banco
const updateUser = async (id) => {};

// metodo para validar o login do usuario
const validarUser = async (login) => {
    const { email } = login;

    const query = "SELECT email, senha FROM user WHERE email = (?)";
    const [validarUser] = await connection.execute(query, [email]);

    console.log(validarUser);
    return validarUser;
};

// exporta os restornos das funções definias aqui
module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser,
    validarUser,
};
