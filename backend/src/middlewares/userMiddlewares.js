const validarUser = (req, res, next) => {
    const { body } = req;

    if (body.nome === undefined) {
        res.status(400).json({ message: 'O campo "nome" é obrigatorio.' });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }

    if (body.email === undefined) {
        res.status(400).json({ message: 'The field "email" is required.' });
    } else if (body.email === "") {
        res.status(400).json({ message: "email não pode ser vazio." });
    }

    if (body.endereco === undefined) {
        res.status(400).json({ message: 'The field "endereco" is required.' });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }

    if (body.cpf === undefined) {
        res.status(400).json({ message: 'The field "cpf" is required.' });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }

    if (body.data_nascimento === undefined) {
        res.status(400).json({
            message: 'The field "data_nascimento" is required.',
        });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }

    if (body.telefone === undefined) {
        res.status(400).json({ message: 'The field "telefone" is required.' });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }

    if (body.senha === undefined) {
        res.status(400).json({ message: 'The field "senha" is required.' });
    } else if (body.nome === "") {
        res.status(400).json({ message: "nome não pode ser vazio." });
    }
};

module.exports = {
    validarUser,
};
