import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';


export const StatusInput = ({ inputValues, setInputValues }) => {
    return (
        <>
            <label htmlFor="gender-input">Status</label>
            <RadioGroup name='gender' id='gender-input' row value={inputValues.status}
                onChange={(e) => setInputValues((pre) => ({ ...pre, status: e.target.value }))}
            >
                <FormControlLabel value='online' control={<Radio />} label="online" />
                <FormControlLabel value='offline' control={<Radio />} label="offline" />
                <FormControlLabel value='busy' control={<Radio />} label="busy" />
                <FormControlLabel value='dnd' control={<Radio />} label="dnd" />
                <FormControlLabel value='idel' control={<Radio />} label="idel" />
                <FormControlLabel value='working' control={<Radio />} label="working" />
            </RadioGroup>
        </>
    )
}
StatusInput.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func
}