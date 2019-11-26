const Joi = require('joi');
import response from '../helper/response';

// API body validation middleware
const validate = (validationSchema) => {
    return function (req, res, next) {
        const validation = Joi.validate(req.body, validationSchema, {
            abortEarly: false
        });
        if (validation.error) {
            var errors = [];
            validation.error.details.forEach(elem => {
                errors.push({
                    path: elem.path[0],
                    message: elem.message
                });
            });

            response.returnError(res, errors, 0);
        } else {
            next();
        }
    }
}

module.exports = validate;