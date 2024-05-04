import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./main.scss";

import Home from "../../../pages/home/Home";
import About from "../../../pages/about/About";
import Contact from "../../../pages/contact/Contact";
import Product from "../../../pages/product/Product";
import ShoppingCart from "../../../pages/shoppingCart/ShoppingCart";
import Tac from "../../../pages/terms-and-conditions/Tac";

const Main = () => {
    return (
        <Box
            component="main"
            className="main">
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}/>
                <Route
                    path="/about"
                    element={<About/>}/>
                <Route
                    path="/contact"
                    element={<Contact/>}/>
                <Route
                    path="/product"
                    element={<Product/>}/>
                <Route
                    path="/product/:id"
                    element={<Product/>}/>
                <Route
                    path="/shopping-cart"
                    element={<ShoppingCart/>}/>
                <Route
                    path="/terms-and-conditions"
                    element={<Tac/>}/>
                <Route
                    path="*"
                    element={<Home/>}/>
            </Routes>
        </Box>
    );
};

export default Main;