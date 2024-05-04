const fs = require("fs");

const fileExists = async (filePath) => {
    try {
        fs.accessSync(filePath);
        return true;
    } catch (error) {
        console.log("File not found");
        return false;
    }
};

const deletefile = async (filePath) => {
    const exists = await fileExists(filePath);

    if (!exists) return false;

    try {
        fs.unlinkSync(filePath);
        return true;
    } catch (error) {
        console.log("File not deleted");
        return false;
    }
};

module.exports = {
    fileExists,
    deletefile,
};