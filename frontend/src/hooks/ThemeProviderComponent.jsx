import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const ThemeContext = createContext()

export const ThemeProviderComponent = ({ children }) => {
    const [mode, setMode] = useState('dark')
    const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark')

    const darkTheme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

ThemeProviderComponent.propTypes = {
    children: PropTypes.node
}