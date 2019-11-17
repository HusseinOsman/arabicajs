const Joi = require('joi');

// API body validation middleware
const validate = (validationSchema) => {
    return function (req, res, next) {
        if(req.body.industry) {
            req.body.industry = req.body.industry.name;
        }        
        const validation = Joi.validate(req.body, validationSchema,{abortEarly: false});
        if (validation.error) {
            var errors=[];
            validation.error.details.forEach(elem=>{
                errors.push({
                    path : elem.path[0],
                    message : elem.message
                });
            }) ;
            res.status(400).send({errors});
        } else {
            next();
        }
    }
}

module.exports = validate;