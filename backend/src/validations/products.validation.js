const Joi = require("joi");

const validate = (schema, params, res, next) => {
    const { error } = schema.validate(params, { allowUnknown: true });

    if (error) {
        console.log({ error: error.details[0].message });
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

const validateParamId = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().integer().positive().required(),
    });

    validate(schema, req.params, res, next);
};

const validateBody = (req, res, next) => {
    const schema = Joi.object({
        amount: Joi.number().integer().min(0).allow(null),
        name: Joi.string().min(3).required(),
        price: Joi.number().min(1).required(),
        stock: Joi.number().integer().min(0).required(),
        brand: Joi.string().min(3).required(),
        category: Joi.string().min(3).required(),
        desc: Joi.string().min(5).allow("").allow(null),
        description: Joi.string().min(15).allow("").allow(null),
        isPromotion: Joi.boolean().required(),
        imageFileName: Joi.string().min(15).required(),
    });

    validate(schema, req.body, res, next);
};

module.exports = {
    validateParamId,
    validateBody,
};