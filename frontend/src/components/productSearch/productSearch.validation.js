import * as yup from "yup";

const createSchema = (searchType) => {
    return searchType === "string" ? { search: yup.string("Ingresa un texto").min(3, "Ingresa 3 o más carateres") } : {};
};

const validationSchema = (searchType) => {
    return yup.object().shape(createSchema(searchType));
};

export default validationSchema;