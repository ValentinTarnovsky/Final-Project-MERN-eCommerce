import { Box } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./slider.scss";

const Slider = () => {
    return (
        <Box className="slider">
            <AliceCarousel
                autoPlay
                autoPlayInterval="3000"
                autoPlayStrategy="none"
                disableButtonsControls="false"
                infinite="true">
                <img
                    alt="slider-img"
                    src={"images/slider-imgs/img1.jpg"}
                    className="sliderimg"/>
                <img
                    alt="slider-img"
                    src={"images/slider-imgs/img2.jpg"}
                    className="sliderimg"/>
                <img
                    alt="slider-img"
                    src={"images/slider-imgs/img3.jpg"}
                    className="sliderimg"/>
                <img
                    alt="slider-img"
                    src={"images/slider-imgs/img4.jpg"}
                    className="sliderimg"/>
            </AliceCarousel>
        </Box>
    );
};

export default Slider;