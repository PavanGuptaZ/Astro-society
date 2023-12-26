import { TextField, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const PasswordInput2 = ({ inputValues, setInputValues, uiUpdates, setUiUpdates, type }) => {

    const togglePassword2 = () => {
        setUiUpdates((pre) => ({ ...pre, password2: !uiUpdates.password1 }))
    }
    let labelValue = type === "old" ? "New Password 2" : "Password 2"
    return (
        <TextField
            label={labelValue}
            variant="outlined"
            name="password2"
            type={uiUpdates.password2 ? 'password' : 'text'}
            value={inputValues.password2}
            onChange={(e) => setInputValues((pre) => ({ ...pre, password2: e.target.value }))}
            InputProps={{
                endAdornment:
                    <InputAdornment position='end'>
                        {uiUpdates.password1 ? <VisibilityIcon onClick={togglePassword2} sx={{ cursor: "pointer" }} /> : <VisibilityOffIcon onClick={togglePassword2} sx={{ cursor: "pointer" }} />}
                    </InputAdornment>
            }}
        />
    )
}
PasswordInput2.propTypes = {
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func,
    setUiUpdates: PropTypes.func,
    uiUpdates: PropTypes.object,
    type: PropTypes.string
}