import { TextField, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const PasswordInput = ({ inputValues, setInputValues, uiUpdates, setUiUpdates, type }) => {

    const togglePassword1 = () => {
        setUiUpdates((pre) => ({ ...pre, password1: !uiUpdates.password1 }))
    }
    let labelValue = type === "old" ? "New Password 1" : "Password 1"

    return (
        <TextField
            label={labelValue}
            variant="outlined"
            name="password"
            type={uiUpdates.password1 ? 'password' : 'text'}
            value={inputValues.password1}
            onChange={(e) => setInputValues((pre) => ({ ...pre, password1: e.target.value }))}
            InputProps={{
                endAdornment:
                    <InputAdornment position='end'>
                        {uiUpdates.password1 ? <VisibilityIcon onClick={togglePassword1} sx={{ cursor: "pointer" }} /> : <VisibilityOffIcon onClick={togglePassword1} sx={{ cursor: "pointer" }} />}
                    </InputAdornment>
            }}
        />
    )
}
PasswordInput.propTypes = {
    type: PropTypes.string,
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func,
    setUiUpdates: PropTypes.func,
    uiUpdates: PropTypes.object
}