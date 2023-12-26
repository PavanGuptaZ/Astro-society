import { Button, FormControl, FormHelperText, TextareaAutosize } from "@mui/material";
import PropTypes from 'prop-types';
import { languages } from '../../utils/formDetails'
import { useEffect, useRef } from "react";


export const LanguagesInput = ({ uiUpdates, LanguageCheck, inputValues, setInputValues, type }) => {
    const languageRef = useRef()
    useEffect(() => {
        if (languageRef.current) {
            languageRef.current.style.height = languageRef.current.scrollHeight + 'px';
        }
    }, [inputValues.languages]);

    const handleLanguageInput = (e) => {
        let value = e

        if (inputValues.languages.includes(value)) {
            let setValue = inputValues.languages.filter((ele) => ele !== value)
            setInputValues((prev) => ({ ...prev, languages: setValue }))
        } else {
            setInputValues((prev) => ({ ...prev, languages: [...prev.languages, value] }))
        }

    }

    const uiCheck = type === "old" ? true : uiUpdates.checks
    return (

        <FormControl fullWidth>
            <label htmlFor="language-input">Languages</label>

            <TextareaAutosize
                readOnly
                id="language-input"
                ref={languageRef}
                type='text' value={inputValues.languages.join(', ')}
                style={{ width: '100%', height: "30px", resize: "vertical", padding: "0.5rem" }} />

            {uiCheck && !LanguageCheck &&
                <FormHelperText error id="language-helper-text">Select Minimum one language.</FormHelperText>}

            <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap", padding: "0.5rem" }}>
                {languages.map((ele) => (
                    <Button key={ele} variant={inputValues.languages.includes(ele) ? "contained" : "outlined"}
                        sx={{ width: "auto" }} onClick={() => handleLanguageInput(ele)} value={ele} >{ele}</Button>
                ))}
            </div>

        </FormControl>
    )
}
LanguagesInput.propTypes = {
    uiUpdates: PropTypes.object,
    LanguageCheck: PropTypes.bool.isRequired,
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func,
    type: PropTypes.string
}