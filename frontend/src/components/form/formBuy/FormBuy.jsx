import PropTypes from "prop-types";
import { useContext } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import InputField from "../inputField/InputField.jsx";
import validationSchema from "./formBuy.validation.js";
import Button from "../../button/Button.jsx";

import ShoppingCartContext from "../../../contexts/ShoppingCartContext.jsx";

const FormBuy = (props) => {
    const { buy } = props;
    const { shoppingCart, postSales } = useContext(ShoppingCartContext);

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            if (shoppingCart?.length > 0) {
                const totalPrice = shoppingCart.reduce((total, product) => {
                    return total + (product.price * product.amount);
                }, 0);

                const productsList = shoppingCart.map((product) => {
                    return {
                        productName: product.name,
                        amount: product.amount,
                    };
                });

                const salesData = {
                    name: values.fullname,
                    email: values.email,
                    productsList,
                    price: totalPrice,
                };

                buy();
                resetForm();
                postSales(salesData);
            }
        },
    });

    return (
        <Box
            component="form"
            className="form-contact"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Full name"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                errorMessage={formik.touched.fullname && formik.errors.fullname}
                inputProps={{ maxLength: 25 }}/>

            <InputField
                label="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 50 }}/>
            <Button
                type="submit">
                    Buy
            </Button>

        </Box>
    );
};

FormBuy.propTypes = {
    buy: PropTypes.func.isRequired,
};

export default FormBuy;