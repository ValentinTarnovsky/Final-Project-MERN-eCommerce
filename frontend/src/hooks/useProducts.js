import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";
import { PRODUCTS_URL } from "../constants/api.js";

const useProducts = () => {
    const { removeCartProduct } = useContext(ShoppingCartContext);
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);

    const searchProducts = async (params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        return await axios.get(url)
            .then((res) => {
                setResponse(res);
                setProducts(res.data?.data);
                return res.data;
            });
    };

    useEffect(() => {
        searchProducts({});
    }, []);

    const createProduct = async (values) => {
        return await axios.post(PRODUCTS_URL, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProduct = async (values) => {
        return await axios.put(`${PRODUCTS_URL}/${values.id}`, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProductStock = async (products) => {
        const promises = products.map(async (product) => {
            const { amount, ...values } = product;
            values.stock -= product.amount;
            return await axios.put(`${PRODUCTS_URL}/${values.id}`, values);
        });

        const responses = await Promise.all(promises);
        const responseData = responses.map((res) => res.data);
        setResponse(responseData);

        return responseData;
    };

    const removeProduct = async (id) => {
        return await axios.delete(`${PRODUCTS_URL}/${id}`)
            .then((res) => {
                setResponse(res);
                removeCartProduct(id);
                searchProducts({});
                return res.data;
            });
    };

    const uploadProductImage = async (file) => {
        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        return await axios.post(`${PRODUCTS_URL}/upload`, { file }, options)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    return {
        products,
        response,
        searchProducts,
        createProduct,
        updateProduct,
        updateProductStock,
        removeProduct,
        uploadProductImage,
    };
};

export default useProducts;