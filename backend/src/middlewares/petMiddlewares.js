// ___________________________________________________________ Cadastro de Pets __________________________________________________________________________
const validarCreatePet = (req, res, next) => {
    const { body } = req;

    let obrigatorios = [];
    let vazio = [];

    // _____________ Verificação de Campos  _____________________________
    if (body.id_user === undefined) {
        obrigatorios.push("id_user");
    }
    if (body.id_user === "") {
        vazio.push("id_user");
    }
    // ________________________________________________________________________________________
    if (body.nome === undefined) {
        obrigatorios.push("nome");
    }
    if (body.nome === "") {
        vazio.push("nome");
    }
    // ________________________________________________________________________________________
    if (body.raca === undefined) {
        obrigatorios.push("raca");
    }
    if (body.raca === "") {
        vazio.push("raca");
    }
    // ________________________________________________________________________________________
    if (body.especie === undefined) {
        obrigatorios.push("especie");
    }
    if (body.especie === "") {
        vazio.push("especie");
    }
    // ________________________________________________________________________________________
    if (body.cor === undefined) {
        obrigatorios.push("cor");
    }
    if (body.cor === "") {
        vazio.push("cor");
    }
    // ________________________________________________________________________________________
    if (body.status === undefined) {
        obrigatorios.push("status");
    }
    if (body.status === "") {
        vazio.push("status");
    }
    // ________________________________________________________________________________________
    if (body.peso === undefined) {
        obrigatorios.push("peso");
    }
    if (body.peso === "") {
        vazio.push("peso");
    }
    // ________________________________________________________________________________________
    if (body.data_nascimento === undefined) {
        obrigatorios.push("data_nascimento");
    }
    if (body.data_nascimento === "") {
        vazio.push("data_nascimento");
    }
    // ________________________________________________________________________________________
    if (body.sexo === undefined) {
        obrigatorios.push("sexo");
    }
    if (body.sexo === "") {
        vazio.push("sexo");
    }
    // ________________________________________________________________________________________
    if (body.descricao === undefined) {
        obrigatorios.push("descricao");
    }
    if (body.descricao === "") {
        vazio.push("descricao");
    }
    // console.log(obrigatorios);
    // console.log(vazio);

    // _____________ Resultado da Verificação de Campos  _____________________________

    if (obrigatorios.length > 0) {
        if (vazio.length > 0) {
            return res.status(400).json({
                message: `Os campos '${obrigatorios}' são obrigatorios. Os campos '${vazio}' não podem ser vazios.`,
            });
        } else {
            return res.status(400).json({
                message: `Os campos '${obrigatorios}' são obrigatorios.`,
            });
        }
    } else if (vazio.length > 0) {
        return res
            .status(400)
            .json({ message: `Os campos '${vazio}' não podem ser vazios` });
    }

    next();
};

module.exports = {
    validarCreatePet,
};
