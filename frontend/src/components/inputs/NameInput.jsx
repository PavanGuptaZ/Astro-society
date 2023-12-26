import { TextField } from '@mui/material';
import PropTypes from 'prop-types';


export const NameInput = ({ inputValues, setInputValues }) => {
    return (
        <TextField
            label="Name"
            variant="outlined"
            name="name"
            type='text'
            value={inputValues.name}
            onChange={(e) => setInputValues((pre) => ({ ...pre, name: e.target.value }))}
        />
    )
}
NameInput.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func
}