import { Button, FormControl, FormHelperText, TextareaAutosize } from "@mui/material";
import PropTypes from 'prop-types';
import { specialties } from '../../utils/formDetails'
import { useEffect, useRef } from "react";


export const SpecialtiesInput = ({ uiUpdates, SpecialtiesCheck, inputValues, setInputValues, type }) => {
    const specialtiesRef = useRef()
    useEffect(() => {
        if (specialtiesRef.current) {
            specialtiesRef.current.style.height = specialtiesRef.current.scrollHeight + 'px';
        }
    }, [inputValues.specialties]);

    const handleSpecialtiesInput = (e) => {
        let value = e.target.value

        if (inputValues.specialties.includes(value)) {
            let setValue = inputValues.specialties.filter((ele) => ele !== value)
            setInputValues((prev) => ({ ...prev, specialties: setValue }))
        } else {
            setInputValues((prev) => ({ ...prev, specialties: [...prev.specialties, value] }))
        }
    }

    const uiCheck = type === "old" ? true : uiUpdates.checks

    return (

        <FormControl fullWidth>
            <label htmlFor="language-input">specialties</label>

            <TextareaAutosize
                readOnly
                id="language-input"
                ref={specialtiesRef}
                type='text'
                value={inputValues.specialties.join(', ')}
                style={{ width: '100%', height: "30px", resize: "vertical", padding: "0.5rem" }} />
            {uiCheck && !SpecialtiesCheck &&
                <FormHelperText error id="language-helper-text">Select Minimum one specialties.</FormHelperText>}

            <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap", padding: "0.5rem" }}>
                {specialties.map((ele) => (
                    <Button key={ele} variant={inputValues.specialties.includes(ele) ? "contained" : "outlined"}
                        sx={{ width: "auto" }} onClick={handleSpecialtiesInput} value={ele} >{ele}</Button>
                ))}
            </div>

        </FormControl>
    )
}
SpecialtiesInput.propTypes = {
    uiUpdates: PropTypes.object,
    SpecialtiesCheck: PropTypes.bool.isRequired,
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func,
    type: PropTypes.string
}