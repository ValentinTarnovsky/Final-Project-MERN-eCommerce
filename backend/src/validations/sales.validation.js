const Joi = require("joi");

const validate = (schema, params, res, next) => {
    const { error } = schema.validate(params, { allowUnknown: true });

    if (error) {
        console.log({ error: error.details[0].message });
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

const validateBody = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        productsList: Joi.array().items(
            Joi.object({
                productName: Joi.string().required(),
                amount: Joi.number().integer().min(1).required(),
            }),
        ).min(1).required(),
        price: Joi.number().min(0).required(),
    });

    validate(schema, req.body, res, next);
};

module.exports = {
    validateBody,
};