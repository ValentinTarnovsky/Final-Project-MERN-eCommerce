import { Box } from "@mui/material";
import "./header.scss";

import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <Box
            component="header"
            className="header">
            <Navbar/>
        </Box>
    );
};

export default Header;