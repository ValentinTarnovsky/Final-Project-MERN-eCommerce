import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./product.scss";

import FormProduct from "../../components/form/formProduct/FormProduct";

const Product = () => {
    const location = useLocation();
    const productoRef = useRef(location?.state?.product);

    return (
        <Box className="product">
            <Box
                component="section"
                className="product__section">
                <h3>Product</h3>

                <FormProduct initialValues={productoRef.current}/>
            </Box>
        </Box>
    );
};

export default Product;