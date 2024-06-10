// user.controller.js

const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

    if(!name || !username || !email || !password) {
        return res.status(400).send({message: 'Missing required fields'});
    }

    res.status(201).send({
        message: 'User created successfully',
        user: {
            name,
            username,
            email,
            avatar,
            background
        }
    })
};

// Exportando a função 'create' para ser usada em outros módulos
module.exports = {create};