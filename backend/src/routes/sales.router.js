const Router = require("express");
const { validateBody } = require("../validations/sales.validation.js");
const { createSale } = require("../controllers/sales.controller.js");
const routes = Router();

routes.post("/", validateBody, (req, res) => {
    createSale(req, res);
});

module.exports = routes;