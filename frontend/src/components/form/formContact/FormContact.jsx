import { useState } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import axios from "axios";
import "./formContact.scss";

import validationSchema from "./formContact.validation.js";

import InputField from "../inputField/InputField.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";
import { MAIL_URL } from "../../../constants/api.js";

const FormContact = () => {
    const [ openAlert, setOpenAlert ] = useState(false);

    const sendEmail = async (values) => {
        const { fullname, telephone, email, consult } = values;

        const queryParams = new URLSearchParams({
            name: fullname,
            email: email,
            phone: telephone,
            query: consult,
        });

        const url = `${MAIL_URL}?${queryParams.toString()}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            return "Error sending email";
        }
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            telephone: "",
            email: "",
            consult: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            sendEmail(values);
            setOpenAlert(true);
            resetForm();
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
                label="Full Name"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                errorMessage={formik.touched.fullname && formik.errors.fullname}
                inputProps={{ maxLength: 25 }}/>

            <InputField
                label="Phone Number"
                name="telephone"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.telephone && Boolean(formik.errors.telephone)}
                errorMessage={formik.touched.telephone && formik.errors.telephone}
                inputProps={{ maxLength: 15 }}/>

            <InputField
                label="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 50 }}/>

            <InputField
                label="Comments"
                name="consult"
                multiline
                rows={5}
                value={formik.values.consult}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.consult && Boolean(formik.errors.consult)}
                errorMessage={formik.touched.consult && formik.errors.consult}
                inputProps={{ maxLength: 150 }}/>

            <Button type="submit">Submit consult</Button>

            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="Your query was sent successfully"/>
        </Box>
    );
};

export default FormContact;