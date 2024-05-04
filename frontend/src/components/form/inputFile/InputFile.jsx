import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import "./inputFile.scss";

import Button from "../../button/Button";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

const InputFile = (props) => {
    const { label, name, accept, multiple, formik, error, errorMessage } = props;

    const [ files, setFiles ] = useState([]);
    const inputFileRef = useRef(null);

    const refreshFiles = (filteredFiles) => {
        // Actualiza la lista de archivos para que se re-renderice en el DOM.
        setFiles(filteredFiles);

        // Crea una nueva lista de archivos que sea compatible con FileList.
        const dataTransfer = new DataTransfer();
        filteredFiles.forEach((filteredFile) => dataTransfer.items.add(filteredFile));

        // Actualiza la lista de archivos en el input file y la lista de la propiedad de formik.
        inputFileRef.current.files = dataTransfer.files;
        formik.setFieldValue(name, filteredFiles);
    };

    const removeFile = (indexToDelete) => {
        const filteredFiles = Array.from(inputFileRef.current.files).filter((file, index) => index != indexToDelete);
        refreshFiles(filteredFiles);
    };

    const handleOnDragOverFile = (event) => {
        // Omite el comportamiento por defecto cuando se está arrastrando un archivo por encima
        // de la zona del drop.
        event.preventDefault();
    };

    const handleOnDropFile = (event) => {
        // Omite el comportamiento por defecto cuando se suelta el archivo en la zona del drop.
        event.preventDefault();

        // filtra la lista de archivos en relación al tipo y determina si se permite más de un archivo.
        const selectedFiles = Array.from(event.dataTransfer.files).filter((file) => accept.includes(file.type));
        refreshFiles((selectedFiles.length > 0 && !multiple) ? [selectedFiles[0]] : selectedFiles);
    };

    const handleOnChangeFile = (event) => {
        // filtra la lista de archivos en relación al tipo y determina si se permite más de un archivo.
        const selectedFiles = Array.from(event.target.files).filter((file) => accept.includes(file.type));
        refreshFiles((selectedFiles.length > 0 && !multiple) ? [selectedFiles[0]] : selectedFiles);
    };

    return (
        <Box className="input-file">

            <Box>
                <Box
                    className={`input-file__drop-zone ${error && "input-file__drop-zone--invalid"}`}
                    id="drop-zone"
                    onDragOver={handleOnDragOverFile}
                    onDrop={handleOnDropFile}>

                    {files?.map((file, index) => (
                        <Box
                            key={index}
                            className="input-file__drop-zone__file">
                            <InsertDriveFileOutlinedIcon/>
                            <span>{file.name}</span>
                            <span>{`${(file.size / 1024).toFixed(1)}KB`}</span>
                            <DeleteIcon onClick={() => removeFile(index)}/>
                        </Box>
                    ))}

                    {files?.length <= 0 && (
                        <span className="input-file__drop-zone__text">
                            {`Drag and drop your ${multiple ? "files" : "file"} here`}
                        </span>
                    )}

                    <Button onClick={() => inputFileRef.current.click()}>
                        {`Select ${multiple ? "Files" : "File"}`}
                    </Button>
                </Box>

                {/* Se colocó aquí para que css pueda aplicar el cambio de estilo cuando no se ha seleccionado un archivo */}
                <span className="input-file__label">{label}</span>

                <input
                    type="file"
                    accept={accept.join()}
                    multiple={multiple}
                    id={name}
                    name={name}
                    ref={inputFileRef}
                    onChange={handleOnChangeFile}
                    style={{ display: "none" }}/>
            </Box>

            {error && (
                <span className="input-file__error">
                    {errorMessage}
                </span>)}
        </Box>
    );
};

InputFile.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    accept: PropTypes.arrayOf(PropTypes.string).isRequired,
    multiple: PropTypes.bool,
    formik: PropTypes.object.isRequired,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
};

InputFile.defaultProps = {
    label: "",
    multiple: false,
    errorMessage: "",
};

export default InputFile;