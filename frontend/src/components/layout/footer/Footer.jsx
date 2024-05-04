import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import "./footer.scss";

import links from "../../../links/links";
import socialMedias from "../../../links/socialMedias";
import legals from "../../../links/legals";

const Footer = () => {

    return (
        <Box
            component="footer"
            className="footer">

            <Box className="footer__groups">
                <Box>
                    <h4 className="footer__groups__title">Explore</h4>
                    <Box className="footer__groups__list footer__groups__list--explorer">
                        {links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.url}>
                                {link.title}
                            </NavLink>
                        ))}
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Social Media</h4>
                    <Box className="footer__groups__list footer__groups__list--social-media">
                        {socialMedias.map((socialMedia, index) => (
                            <NavLink
                                key={index}
                                to={socialMedia.url}>
                                {socialMedia.icon}{socialMedia.title}
                            </NavLink>
                        ))}
                    </Box>
                </Box>

                <Box>
                    <h4 className="footer__groups__title">Legal</h4>
                    <Box className="footer__groups__list footer__groups__list--legal">
                        {legals.map((legal, index) => (
                            <NavLink
                                key={index}
                                to={legal.url}
                                rel="noopener noreferrer">
                                {legal.title}
                            </NavLink>
                        ))}
                    </Box>
                </Box>

            </Box>

            <Box className="footer__copyright">
                <span>&copy;2023 All rights reserved</span>
            </Box>
        </Box>
    );
};

export default Footer;