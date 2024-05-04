import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton } from "@mui/material";
import "./productCard.scss";

import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import Button from "../button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IT_IS_OFF } from "../../constants/general";
import { IMAGES_URL } from "../../constants/api";
import Modal from "../modal/Modal";

const ProductCard = (props) => {
    const { product, removeProduct } = props;
    const { getCartProduct, addCartProduct, subtractCartProduct } = useContext(ShoppingCartContext);
    const [ counter, setCounter ] = useState(0);

    const [ openModal, setOpenModal ] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleOnClickSubtract = (product) => {
        subtractCartProduct(product);
        setCounter(counter - 1);
    };

    const handleOnClickAdd = (product) => {
        addCartProduct(product);
        setCounter(counter + 1);
    };

    return (
        <Card className="product-card">
            <Box className="product-card__floats">
                <Box>
                    <IconButton
                        component={NavLink}
                        to={`/product/${product.id}`}
                        state={{ product }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => removeProduct(product.id)}><DeleteIcon/></IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                className="product-card__image"
                image={`${IMAGES_URL}/${product.imageFileName}`}
                alt={`${product.name} image`}/>
            <CardContent className="product-card__content">
                <h4>{product.name}</h4>
                <p><span>Description:</span> {`${product.desc}`}</p>
                {!product.isPromotion && <p><span>Price:</span> {`${product.price.toFixed(0)}.00`}</p>}
                {product.isPromotion && <p><span>Promotional price:</span> {`${(product.price - (product.price / 100 * IT_IS_OFF).toFixed(0))}.00`}</p>}
                <p>More info <a
                    onClick={handleOpenModal}
                    className="product-card__content__click">click here.</a></p>
            </CardContent>
            <CardActions className="product-card__actions">
                {product.stock > 0
                    ? (<>
                        {counter === 0 ? (
                            <Button
                                disabled={true}
                                color="disabled"
                                onClick={() => handleOnClickSubtract(product)}>
                                <RemoveIcon/>
                            </Button>
                        ) : (
                            <Button
                                color="danger"
                                onClick={() => handleOnClickSubtract(product)}>
                                <RemoveIcon/>
                            </Button>
                        )}
                        <span>{getCartProduct(product.id)?.amount ?? counter}</span>
                        {counter === product.stock ? (
                            <Button
                                disabled={true}
                                color="disabled"
                                onClick={() => handleOnClickAdd(product)}>
                                <AddIcon/>
                            </Button>
                        ) : (
                            <Button
                                onClick={() => handleOnClickAdd(product)}>
                                <AddIcon/>
                            </Button>
                        )}
                    </>)
                    : (<span>OUT OF STOCK</span>)
                }
            </CardActions>
            <Modal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                product={product}
                image={`${IMAGES_URL}/${product.imageFileName}`}
                IT_IS_OFF={IT_IS_OFF}/>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
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
    removeProduct: PropTypes.func.isRequired,
};

export default ProductCard;