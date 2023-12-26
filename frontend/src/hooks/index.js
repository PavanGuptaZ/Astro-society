import { useContext } from "react";
import { ThemeContext } from "./ThemeProviderComponent";



export const useThemeContext = () => {
    return useContext(ThemeContext)
}