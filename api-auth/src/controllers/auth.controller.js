const authService = require('../services/auth.service');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.register(email, password);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.login(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};