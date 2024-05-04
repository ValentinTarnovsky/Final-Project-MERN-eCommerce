const path = require("path");

const ENV_PATH = path.join(__dirname, "../../.env");
const DIR_PUBLIC_PATH = path.join(__dirname, "../public");
const DIR_IMAGES_PATH = path.join(DIR_PUBLIC_PATH, "images");

module.exports = {
    ENV_PATH,
    DIR_PUBLIC_PATH,
    DIR_IMAGES_PATH,
};