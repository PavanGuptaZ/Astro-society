import { TextField } from '@mui/material';
import PropTypes from 'prop-types';


export const EmailInput = ({ inputValues, setInputValues, type }) => {
    return (
        <TextField
            label="Email"
            variant={type === "old" ? "filled" : "outlined"}
            name="name"
            type='email'
            value={inputValues.email}
            onChange={(e) => {
                type === "old" ? null :
                    setInputValues((pre) => ({ ...pre, email: e.target.value }))
            }}
        />
    )
}
EmailInput.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func,
    type: PropTypes.string
}