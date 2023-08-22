// ___________________________________________________________ Cadastro de Adocao __________________________________________________________________________
const validarCreateAdocao = (req, res, next) => {
    const { body } = req;

    next();
};

module.exports = {
    validarCreateAdocao,
};
