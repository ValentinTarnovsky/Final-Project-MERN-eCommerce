const express = require("express");
const multer = require("multer");
const cors = require("cors");

const salesRouter = require("./routes/sales.router.js");
const productsRouter = require("./routes/products.router.js");
const sendMail = require("./mailer.js");
const database = require("./connectionDB.js");

const { ENV_PATH, DIR_PUBLIC_PATH } = require("./constants/paths.js");
const { ERROR_SERVER } = require("./constants/messages.js");

// variables de entorno
require("dotenv").config({ path: ENV_PATH });

// Configuración de express
const server = express();
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// configuración de CORS
server.use(cors());

// Middlewares
server.use(express.json());
server.use("/api/products", productsRouter);
server.use("/api/sales", salesRouter);

// Configuración de carpeta estatica
server.use("/public", express.static(DIR_PUBLIC_PATH));

// Mandar mails de consulta
server.get("/api/send-mail", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { name, email, phone, query } = req.query;

        if (!name || !email || !phone || !query) {
            return res.status(400).send({ error: "Missing relevant data" });
        }
        const result = await sendMail(name, email, phone, query);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Control de errores
server.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(error.code).send({ success: false, message: error.field });
    }

    res.status(500).send({ success: false, message: ERROR_SERVER });
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>The specified URL does not exist on this server</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Server NodeJS version: ${process.version}`);
    console.log(`Running on http://${HOST}:${PORT}`);
    database.connect(process.env.DATABASE_URL, process.env.DATABASE_NAME);
});

// Método para desconectar MongoDB
process.on("SIGINT", async () => {
    await database.desconnect();
    process.exit();
});