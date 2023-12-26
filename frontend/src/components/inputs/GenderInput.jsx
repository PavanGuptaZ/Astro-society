import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';


export const GenderInput = ({ inputValues, setInputValues }) => {
    return (
        <>
            <label htmlFor="gender-input">Gender</label>
            <RadioGroup name='gender' id='gender-input' row value={inputValues.gender}
                onChange={(e) => setInputValues((pre) => ({ ...pre, gender: e.target.value }))}
            >
                <FormControlLabel value='male' control={<Radio />} label="male" />
                <FormControlLabel value='female' control={<Radio />} label="female" />
                <FormControlLabel value='prefer not to say' control={<Radio />} label="prefer not to say" />
            </RadioGroup>
        </>
    )
}
GenderInput.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func
}