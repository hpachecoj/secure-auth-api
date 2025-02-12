const userService = require('../services/userService');

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Bad request', error: error.message });
    }
};

module.exports = {
    getUser,
    createUser,
};