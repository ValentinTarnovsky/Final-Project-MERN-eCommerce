import { Box } from "@mui/material";
import "./home.scss";

import ProductGallery from "../../components/productGallery/ProductGallery";
import Slider from "../../components/slider/Slider";

const Home = () => {
    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">
                <Slider/>

                <ProductGallery/>
            </Box>
        </Box>
    );
};

export default Home;