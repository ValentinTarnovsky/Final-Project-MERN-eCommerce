import { NavLink } from "react-router-dom";
import { Card, CardActions, CardMedia } from "@mui/material";
import "./productCreateCard.scss";

import Button from "../button/Button";

const ProductCreateCard = () => {
    return (
        <Card className="product-create-card">
            <CardMedia
                component="img"
                className="product-create-card__image"
                image="/images/home/createProduct.png"
                alt="Imagen de crear producto"/>
            <CardActions className="product-create-card__actions">
                <Button
                    component={NavLink}
                    to="/product">
                        Create Product
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCreateCard;