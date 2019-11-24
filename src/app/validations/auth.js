const Joi = require('joi');

const login = {
    email: Joi.string().email({
        minDomainAtoms: 2
    }),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
};

const register = {
    email: Joi.string().email({
        minDomainAtoms: 2
    }),
    password: Joi.string().min(8).regex(/^[a-zA-Z0-9]{3,30}$/),
    name: Joi.string().alphanum().min(3).max(30).required(),
};

module.exports = {
    login,
    register
};