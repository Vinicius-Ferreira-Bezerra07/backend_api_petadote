// ___________________________________________________________ Cadastro de Adocao __________________________________________________________________________
const validarCreateAdocao = (req, res, next) => {
    const { body } = req;

    let obrigatorios = [];
    let vazio = [];

    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.id_pet === undefined) {
        obrigatorios.push("id_pet");
    }
    if (body.id_pet === "") {
        vazio.push("id_pet");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.id_adotante === undefined) {
        obrigatorios.push("id_adotante");
    }
    if (body.id_adotante === "") {
        vazio.push("id_adotante");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.status === undefined) {
        obrigatorios.push("status");
    }
    if (body.status === "") {
        vazio.push("status");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.data_adocao === undefined) {
        obrigatorios.push("data_adocao");
    }
    if (body.data_adocao === "") {
        vazio.push("data_adocao");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    // console.log(obrigatorios);
    // console.log(vazio);

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
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    next();
};

module.exports = {
    validarCreateAdocao,
};

// CREATE TABLE
//     adocao (
//         id_adoc int NOT NULL AUTO_INCREMENT,
//         id_pet int NOT NULL,
//         id_adotante int NOT NULL,
//         status VARCHAR(25) NOT NULL,
//         data_adocao DATE NOT NULL,
//         PRIMARY KEY (id_adoc),
//         FOREIGN KEY (id_pet) REFERENCES pet (id_pet),
//         FOREIGN KEY (id_adotante) REFERENCES user (id_user)
//     );
