const { MongoClient } = require("mongodb");

let client;
let database;

const connect = async (url, databaseName) => {
    try {
        if (!client) {
            console.log("Connecting...");
            client = new MongoClient(url);
            await client.connect();
            database = client.db(databaseName);
            console.log("Connected to MongoDB");
        }
    } catch (error) {
        console.log(error.message);
    }
};

const desconnect = async () => {
    try {
        await client.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.log(error.message);
    }
};

const getCollection = async (nameCollection) => {
    return database.collection(nameCollection);
};

const generateId = async (collection) => {
    const documentMaxId = await collection.find().sort({ id: -1 }).limit(1).toArray();
    const maxId = documentMaxId[0]?.id ?? 0;

    return maxId + 1;
};

module.exports = { connect, desconnect, getCollection, generateId };