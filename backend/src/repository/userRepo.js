// importar a conecção
const connection = require('./connection')

// metodo para buscar os usuarios no banco
const getAllUser = async () => {
    // return res.status(200).json({ message: 'repository esta funcionando' })
    const [user] = await connection.execute("SELECT * FROM user")
    return user
}

const createUser = async (user) => {
    const { cpf, nome } = user

    const query = "INSERT INTO user (cpf, nome) VALUES (?, ?)"
    const createUser = await connection.execute(query, [cpf, nome])

    return createUser
}

const removeUser = async (id) => {

}

const updateUser = async (id) => {

}

// exporta os restornos das funções definias aqui
module.exports = {
    getAllUser,
    createUser,
    removeUser,
    updateUser
}