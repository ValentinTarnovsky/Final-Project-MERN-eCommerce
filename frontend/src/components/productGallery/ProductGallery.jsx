import useProducts from "../../hooks/useProducts.js";
import { Box } from "@mui/material";
import "./productGallery.scss";

import ProductSearch from "../productSearch/ProductSearch";
import ProductCreateCard from "../productCreateCard/ProductCreateCard";
import ProductCard from "../productCard/ProductCard";

const ProductGallery = () => {
    const { products, searchProducts, removeProduct } = useProducts();

    return (
        <Box className="product-gallery">
            <Box className="product-gallery__search">
                <h3>Productos</h3>
                <ProductSearch searchProducts={searchProducts}/>
            </Box>

            <Box
                className="product-gallery__cards">
                <ProductCreateCard/>
                {products?.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        removeProduct={removeProduct}/>
                ))}
            </Box>
        </Box>
    );
};

export default ProductGallery;