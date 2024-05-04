import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Badge,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import "./navbar.scss";

import links from "../../../links/links";

import ShoppingCartContext from "../../../contexts/ShoppingCartContext";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Logo from "../../logo/Logo";

const Navbar = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const { countProducts } = useContext(ShoppingCartContext);
    const handleOnClickOpenDrawer = () => setOpenDrawer(true);
    const handleOnClickCloseDrawer = () => setOpenDrawer(false);

    return (
        <Box
            component="nav"
            className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuIcon onClick={handleOnClickOpenDrawer}/>
            </Box>

            <Box className="navbar__items">
                {links.map((link, index) => (
                    <Button
                        key={index}
                        component={NavLink}
                        to={link.url}>
                        {link.title}
                    </Button>
                ))}
            </Box>

            <Box className="navbar__shopping-cart">
                <Link to="/">
                    <Logo/>
                </Link>
                <IconButton
                    component={NavLink}
                    to="/shopping-cart">
                    <Badge
                        className="navbar__shopping-cart__icon-badge"
                        badgeContent={countProducts()}>
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </IconButton>
            </Box>

            <Drawer
                open={openDrawer}
                anchor="left"
                onClose={handleOnClickCloseDrawer}>
                <List>
                    {links.map((link, index) => (
                        <ListItem
                            key={index}
                            component={NavLink}
                            to={link.url}>
                            <ListItemButton
                                onClick={handleOnClickCloseDrawer}>
                                <ListItemIcon>{link.icon}</ListItemIcon>
                                <ListItemText>{link.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>
        </Box>
    );
};

export default Navbar;