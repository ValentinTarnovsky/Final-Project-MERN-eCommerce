import { Box, Modal as Modalui } from "@mui/material";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = (props) => {
    const { openModal, handleCloseModal, product, image, itIsOff } = props;

    return (
        <Modalui
            open={openModal}
            onClose={handleCloseModal}>
            <Box className="modal">
                <Box className="modal__imgbox">
                    <img
                        src={image}
                        alt={product.name}/>
                </Box>
                <Box className="modal__infobox">
                    <Box>
                        <h2>{product.name}</h2>
                        <h4>Description</h4>
                        <p>{product.description}</p>
                        <p><span className="modal__infobox__infoname">Category:</span><span className="modal__infobox__infodata">{product.category}</span></p>
                        <p><span className="modal__infobox__infoname">Brand:</span><span className="modal__infobox__infodata">{product.brand}</span></p>
                        <p><span className="modal__infobox__infoname">Stock:</span><span className="modal__infobox__infodata">{product.stock}</span></p>
                    </Box>
                    <Box>
                        {product.isPromotion ? (
                            <h3>FLASH SALE! <s>${product.price.toFixed(0)}.00</s> ${product.price - (product.price / 100 * itIsOff).toFixed(0)}.00</h3>
                        ) : (
                            <h3>${product.price.toFixed(0)}.00</h3>
                        )}
                    </Box>
                </Box>
            </Box>
        </Modalui>
    );
};

Modal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    itIsOff: PropTypes.number,
};

export default Modal;