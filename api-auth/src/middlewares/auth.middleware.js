const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (req, res, next)=>{
    const token = req.header("Authorization");
    if(!toke){return res.status(401).json({message:"Acesso negado!"})}
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(error){
        res.status(400).json({message:"Token inválido!"});
    }
};