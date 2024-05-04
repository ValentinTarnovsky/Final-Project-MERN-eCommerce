import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_EMAIL_INVALID,
    REGEX_EMAIL,
} from "../../../constants/regexPattern.js";

const validationSchema = yup.object({
    fullname: yup
        .string("Ingresa tu nombre y apellido")
        .min(7, "Ingresa un nombre y apellido que tenga mas de 7 carateres")
        .required(MESSAGE_REQUIRED),
    email: yup
        .string("Ingresa tu email")
        .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;