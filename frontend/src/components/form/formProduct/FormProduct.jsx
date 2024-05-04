import { useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formProduct.scss";

import validationSchema from "./formProduct.validation.js";

import InputField from "../inputField/InputField.jsx";
import InputFile from "../inputFile/InputFile.jsx";

import Switch from "../switch/Switch.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";
import { IMAGES_URL, IMAGE_DEFAULT_NAME } from "../../../constants/api.js";
import { JPG, PNG } from "../../../constants/general.js";

const FormProduct = (props) => {
    const { initialValues } = props;

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ openFileAlert, setOpenFileAlert ] = useState(false);
    const { createProduct, updateProduct, uploadProductImage } = useProducts();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if (values.files && values.files.length < 1) {
                return setOpenFileAlert(true);
            }

            if (values?.files) {
                const response = await uploadProductImage(values.files[0]);
                values.imageFileName = response?.data?.filename ? response.data.filename : IMAGE_DEFAULT_NAME;
            }

            values.id ? updateProduct(values) : createProduct(values);
            setOpenAlert(true);
        },
    });

    return (
        <Box
            component="form"
            className="form-product"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Title"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 30 }}>
            </InputField>

            <InputField
                label="Price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                errorMessage={formik.touched.price && formik.errors.price}
                inputProps={{ maxLength: 7 }}>
            </InputField>

            <InputField
                label="Stock"
                name="stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                errorMessage={formik.touched.stock && formik.errors.stock}
                inputProps={{ maxLength: 5 }}>
            </InputField>

            <InputField
                label="Brand"
                name="brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                errorMessage={formik.touched.brand && formik.errors.brand}
                inputProps={{ maxLength: 20 }}
                disabled={true}>
            </InputField>

            <InputField
                label="Category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                errorMessage={formik.touched.category && formik.errors.category}
                inputProps={{ maxLength: 20 }}>
            </InputField>

            <InputField
                label="Small Description"
                name="desc"
                multiline
                rows={2}
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.desc && Boolean(formik.errors.desc)}
                errorMessage={formik.touched.desc && formik.errors.desc}
                inputProps={{ maxLength: 50 }}/>

            <InputField
                label="Long Descripción"
                name="description"
                multiline
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                errorMessage={formik.touched.description && formik.errors.description}
                inputProps={{ maxLength: 200 }}/>

            <InputFile
                label="Image"
                name="files"
                accept={[ JPG, PNG ]}
                formik={formik}
                error={formik.touched.files && Boolean(formik.errors.files)}
                errorMessage={formik.touched.files && formik.errors.files}/>

            <Box
                className="form-product__image"
                component="img"
                src={`${IMAGES_URL}/${formik.values.imageFileName}`}
                alt="Fotografía del producto"/>

            <Switch
                label="Is on promotion"
                name="isPromotion"
                value={formik.values.isPromotion}
                onChange={formik.handleChange}
            />

            <Box className="form-product__btn-container">
                <Button type="submit">Confirm</Button>
                <Button
                    component={NavLink}
                    to="/"
                    type="button"
                    color="danger">
                    Cancel
                </Button>
            </Box>
            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="The product has been processed successfully."
                redirectUrl="/"/>
            <Alert
                severity={"warning"}
                openAlert={openFileAlert}
                setOpenAlert={setOpenFileAlert}
                message="An image needs to be uploaded"/>
        </Box>
    );
};

FormProduct.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        isPromotion: PropTypes.bool.isRequired,
        imageFileName: PropTypes.string.isRequired,
    }).isRequired,
};

FormProduct.defaultProps = {
    initialValues: {
        name: "",
        price: 0,
        stock: 0,
        brand: "Apple",
        category: "",
        desc: "",
        description: "",
        isPromotion: false,
        imageFileName: IMAGE_DEFAULT_NAME,
        files: [],
    },
};

export default FormProduct;