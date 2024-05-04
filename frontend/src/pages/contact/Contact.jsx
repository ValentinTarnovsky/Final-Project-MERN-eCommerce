import { Box } from "@mui/material";
import "./contact.scss";

import FormContact from "../../components/form/formContact/FormContact.jsx";

import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
    return (
        <Box className="contact">
            <Box
                component="section"
                className="contact__section">
                <h3>Contact Us</h3>

                <FormContact/>
            </Box>

            <Box
                component="section"
                className="contact__section">
                <h3>Contact information</h3>
                <Box className="contact__section__data">
                    <Box>
                        <PlaceIcon/>
                        <span>Av. 9 de Julio w/n, C1043 Buenos Aires, Argentina.</span>
                    </Box>
                    <Box>
                        <PhoneIcon/>
                        <span>+54 9 113-191-5090</span>
                    </Box>
                    <Box>
                        <MailIcon/>
                        <span>contact@trendstore.com</span>
                    </Box>
                </Box>
                <Box className="contact__section__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167135781053!2d-58.38415068842414!3d-34.60373887284149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1711898400472!5m2!1ses-419!2sar"
                        loading="lazy"/>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;