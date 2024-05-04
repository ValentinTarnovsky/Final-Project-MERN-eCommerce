import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import "./productSearch.scss";

import InputField from "../form/inputField/InputField.jsx";
import Button from "../button/Button.jsx";

import SearchIcon from "@mui/icons-material/Search";
import validationSchema from "./productSearch.validation.js";

const ProductSearch = (props) => {
    const { searchProducts } = props;
    const [ searchType, setSearchType ] = useState("string");
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const setSearchProductParams = (params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `?${queryParams.toString()}` : "";
        navigate(url);
    };

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        validationSchema: validationSchema(searchType),
        onSubmit: (values) => {
            if (values.search.length > 0) {
                setSearchProductParams({ search: values.search });
            }
        },
    });

    const handleOnChange = (event) => {
        formik.handleChange(event);

        setSearchType(isNaN(event.target.value) ? "string" : "number" );

        if (event.target.value.trim().length === 0) {
            setSearchProductParams({});
        }
    };

    useEffect(() => {
        const params = Object.fromEntries(searchParams);
        searchProducts(params);
        formik.values.search = params.search ?? "";
    }, [searchParams]);

    return (
        <Box
            component="form"
            className="product-search"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                name="search"
                value={formik.values.search}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
                error={formik.touched.search && Boolean(formik.errors.search)}
                errorMessage={formik.touched.search && formik.errors.search}
                inputProps={{ maxLength: 10 }}>
            </InputField>

            <Button type="submit"><SearchIcon/></Button>
        </Box>
    );
};

ProductSearch.propTypes = {
    searchProducts: PropTypes.func.isRequired,
};

export default ProductSearch;