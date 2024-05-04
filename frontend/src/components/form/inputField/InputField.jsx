import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "./inputField.scss";

const InputField = (props) => {
    const { label, type, multiline, rows, name, value, onChange, onBlur, error, errorMessage, inputProps, placeholder, disabled } = props;

    return (
        <TextField
            className={`input-field ${error && "input-field--invalid"}`}
            label={label}
            type={type}
            multiline={multiline}
            rows={rows}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
            helperText={errorMessage}
            inputProps={inputProps}
            placeholder={placeholder}
            disabled={disabled}/>
    );
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    label: "",
    type: "text",
    multiline: false,
    error: false,
    errorMessage: "",
    inputProps: {},
};

export default InputField;