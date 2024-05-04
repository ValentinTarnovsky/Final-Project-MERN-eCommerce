import { Box, InputLabel, Switch as SwitchUI } from "@mui/material";
import PropTypes from "prop-types";
import "./switch.scss";

const Switch = (props) => {
    const { label, name, value, onChange, inputProps } = props;

    return (
        <Box className="switch">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <SwitchUI
                id={name}
                name={name}
                checked={value}
                onChange={onChange}
                size="small"
                inputProps={inputProps}/>
        </Box>
    );
};

Switch.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    inputProps: PropTypes.object,
};

Switch.defaultProps = {
    label: "",
    value: false,
    inputProps: {},
};

export default Switch;