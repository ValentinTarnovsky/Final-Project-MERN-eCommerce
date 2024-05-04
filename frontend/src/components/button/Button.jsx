import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {
    const { component, to, type, onClick, color, children, disabled } = props;

    return (
        <ButtonUI
            className={`button ${color && `button--${color}`}`}
            component={component}
            to={to}
            type={type}
            onClick={onClick}
            variant="contained"
            size="small"
            disabled={disabled}>
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,
    to: PropTypes.string,
    type: PropTypes.oneOf([ "button", "submit", "reset" ]),
    onClick: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    component: "button",
    type: "button",
    disabled: false,
};

export default Button;