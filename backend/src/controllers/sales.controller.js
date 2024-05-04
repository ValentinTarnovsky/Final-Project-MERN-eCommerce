const { getCollection, generateId } = require("../connectionDB.js");
const { ERROR_SERVER } = require("../constants/messages.js");

// Función para crear una nueva venta
const createSale = async (req, res) => {
    try {
        const { name, email, productsList, price } = req.body;

        // Generar un ID
        const saleId = await generateId(await getCollection("sales"));

        // Obtener la fecha y hora
        const date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear() + 1} - ${new Date().getHours()}:${new Date().getMinutes()}`;

        // Crear el objeto
        const sale = {
            saleId,
            name,
            email,
            date,
            productsList,
            price,
        };

        // Guardar la venta en la database
        const collection = await getCollection("sales");
        await collection.insertOne(sale);

        // Devolver la venta creada
        res.status(200).send({ success: true, data: sale });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

module.exports = { createSale };