import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_PRICE_INVALID,
    MESSAGE_STOCK_INVALID,
    REGEX_PRICE,
    REGEX_STOCK,
    MESSAGE_CHARACTER_LONG,
    MESSAGE_VALID_CATEGORIES,
    validCategories,
} from "../../../constants/regexPattern.js";

const validationSchema = yup.object({
    name: yup
        .string("Enter the product title.")
        .min(5, MESSAGE_CHARACTER_LONG)
        .required(MESSAGE_REQUIRED),
    price: yup
        .string("Enter the price.")
        .matches(REGEX_PRICE, MESSAGE_PRICE_INVALID)
        .required(MESSAGE_REQUIRED),
    stock: yup
        .string("Enter the stock.")
        .matches(REGEX_STOCK, MESSAGE_STOCK_INVALID)
        .required(MESSAGE_REQUIRED),
    brand: yup
        .string("Enter the product brand name.")
        .min(5, MESSAGE_CHARACTER_LONG)
        .required(MESSAGE_REQUIRED),
    category: yup
        .string("Enter the product category.")
        .min(5, MESSAGE_CHARACTER_LONG)
        .matches(new RegExp(`^(${validCategories.join("|")})$`), MESSAGE_VALID_CATEGORIES)
        .required(MESSAGE_REQUIRED),
    desc: yup
        .string("Enter the small product description.")
        .min(5, MESSAGE_CHARACTER_LONG)
        .required(MESSAGE_REQUIRED),
    description: yup
        .string("Enter long product description.")
        .min(5, MESSAGE_CHARACTER_LONG)
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;