const Router = require("express");
const { validateParamId, validateBody } = require("../validations/products.validation.js");
const { getAll, getOne, create, update, remove, uploadImage } = require("../controllers/products.controller.js");
const uploaderImage = require("../uploader.image.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getAll(req, res);
    })
    .get("/:id", validateParamId, (req, res) => {
        getOne(req, res);
    })
    .post("/", validateBody, (req, res) => {
        create(req, res);
    })
    .put("/:id", validateParamId, validateBody, (req, res) => {
        update(req, res);
    })
    .delete("/:id", validateParamId, (req, res) => {
        remove(req, res);
    })
    .post("/upload", uploaderImage.single("file"), (req, res) => {
        uploadImage(req, res);
    });

module.exports = routes;