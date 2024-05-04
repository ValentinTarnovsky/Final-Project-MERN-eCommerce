const MESSAGE_REQUIRED = "Required field*";
const MESSAGE_TELEPHONE_INVALID = "Enter a valid phone number. E.g.: 02644241020.";
const MESSAGE_EMAIL_INVALID = "Enter a valid email. E.g.: ser@gmail.com.";
const MESSAGE_PRICE_INVALID = "Enter a valid price.";
const MESSAGE_STOCK_INVALID = "Enter a valid stock.";
const MESSAGE_CHARACTER_LONG = "It must be at least 5 characters long.";
const MESSAGE_VALID_CATEGORIES = "Category must be one of: iPhones, iPads, MacBooks, AirPods, AppleWatchs, Others";

const REGEX_TELEPHONE = /[0-1]+/;
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const REGEX_PRICE = /^(([1-9]{1}[0-9]*)(,[0-9]{1,2}){0,1})$/;
const REGEX_STOCK = /^([0-9]{1,6})$/;

const validCategories = [ "iPhones", "iPads", "MacBooks", "AirPods", "AppleWatchs", "Others" ];

export {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    MESSAGE_PRICE_INVALID,
    MESSAGE_STOCK_INVALID,
    MESSAGE_CHARACTER_LONG,
    MESSAGE_VALID_CATEGORIES,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
    REGEX_PRICE,
    REGEX_STOCK,
    validCategories,
};