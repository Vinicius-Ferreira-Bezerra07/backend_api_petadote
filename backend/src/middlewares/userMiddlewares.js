const validarCreateUser = (req, res, next) => {
    const { body } = req;

    let obrigatorios = [];
    let vazio = [];

    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.nome === undefined) {
        obrigatorios.push("nome");
    }
    if (body.nome === "") {
        vazio.push("nome");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.email === undefined) {
        obrigatorios.push("email");
    }
    if (body.email === "") {
        vazio.push("mail");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.endereco === undefined) {
        obrigatorios.push("endereco");
    }
    if (body.endereco === "") {
        vazio.push = "endereco";
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.cpf === undefined) {
        obrigatorios.push("cpf");
    }
    if (body.cpf === "") {
        vazio.push("cpf");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.data_nascimento === undefined) {
        obrigatorios.push("data_nascimento");
    }
    if (body.data_nascimento === "") {
        vazio.push("data_nascimento");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.telefone === undefined) {
        obrigatorios.push("telefone");
    }
    if (body.telefone === "") {
        vazio.push("telefone");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    if (body.senha === undefined) {
        obrigatorios.push("senha");
    }
    if (body.senha === "") {
        vazio.push("senha");
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------------

    console.log(obrigatorios);
    console.log(vazio);

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

    // const obrigatorio = [
    //     nome,
    //     email,
    //     endereco,
    //     cpf,
    //     data_nascimento,
    //     telefone,
    //     senha
    // ];

    // for (const key in req.body) {
    //     if (key === undefined) {
    //         obrigatorios.push = key;
    //     } else if (key === "") {
    //         vazio.push = key;
    //     }
    // }

    // body.map((i) => {
    //     if (body.i === undefined) {
    //         obrigatorios.push = "nome";
    //     } else if (body.i === "") {
    //         vazio.push = "nome";
    //     }
    // });

    // console.log(req.body.name);

    // -----------------------------------------------------------------------------------------------------------------------------------------------
    next();
};

const validarValidacao = (req, res, next) => {
    const { body } = req;

    const obrigatorio = [];
    const vazio = [];

    if (body.usuario === "") {
        vazio.push("email");
        // return res.status(400).json({
        //     message: `O campo email é obrigatorio.`,
        // });
    }
    if (body.usuario === undefined) {
        obrigatorio.push("email");
        // return res.status(400).json({
        //     message: `O campo email é requirido.`,
        // });
    }
    if (body.password === "") {
        vazio.push("senha");
        // return res.status(400).json({
        //     message: `O campo senha é obrigatorio.`,
        // });
    }
    if (body.password === undefined) {
        obrigatorio.push("senha");
        // return res.status(400).json({
        //     message: `O campo senha é requirido.`,
        // });
    }

    if (obrigatorio.length > 0) {
        if (vazio.length > 0) {
            return res.status(400).json({
                message: `Os campos '${obrigatorio}' são obrigatorios. Os campos '${vazio}' não podem ser vazios.`,
            });
        } else {
            return res.status(400).json({
                message: `Os campos '${obrigatorio}' são obrigatorios.`,
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
    validarCreateUser,
    validarValidacao,
};
