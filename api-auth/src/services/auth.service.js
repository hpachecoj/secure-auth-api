const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt.utils');

const register = async (email, password) => {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('Usuário já existe!');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    return generateToken(newUser);
};

const login = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Credenciais inválidas!');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Credenciais inválidas!');

    return generateToken(user);
};

module.exports = { register, login };