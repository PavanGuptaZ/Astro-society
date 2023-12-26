import { Button, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import styles from '../css/homepage.module.css';
import Logo from '../assets/Astro-society.png';
import { NavLink, useNavigate } from 'react-router-dom'
import { useThemeContext } from "../hooks";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, removeUser } from "../features/authSlice";
import { useLogoutAstrologerMutation } from "../features/authApiSlice";

export const NavigationBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const theme = useTheme()
    const navigator = useNavigate()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Stack className={styles.NavigationBar} direction={'row'} px={{ xs: 2, sm: 4, md: 10 }} justifyContent={'space-between'}
            sx={{ boxShadow: '1px 1px 10px gray' }}>
            <Stack direction={'row'} alignItems={'center'} gap={1} onClick={() => navigator('/')} sx={{ cursor: "pointer" }}>
                <div className={styles.imgBox}>
                    <img src={Logo} className={styles.img} alt="" />
                </div>
                <Typography variant="h5" sx={{ userSelect: 'none' }}>Astro-Society</Typography>
            </Stack>
            <Stack>
                {isSmall ?
                    <>
                        <Stack onClick={() => setDrawerOpen(!drawerOpen)}>
                            <MenuIcon sx={{ cursor: 'pointer' }} />
                        </Stack>
                        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <NavigationBarContent />
                        </Drawer>
                    </>
                    :
                    <NavigationBarContent />
                }
            </Stack>

        </Stack >
    )
}


export const NavigationBarContent = () => {
    const user = useSelector(currentUser)
    const { mode, toggleMode } = useThemeContext()
    const [logout] = useLogoutAstrologerMutation()
    const dispatch = useDispatch()
    const handleClassName = ({ isActive }) => {
        return styles.NavLinkBtn + " " + (isActive ? styles.active : "")
    }
    const HandleLogout = () => {
        logout()
        dispatch(removeUser())
    }
    return (
        <Stack open direction={{ xs: 'column', sm: 'row' }} alignItems={'center'} gap={2} padding={{ xs: 5, sm: 0 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} className={styles.NavLinkBox}>
                {user ?
                    <>
                        <NavLink to={'/profile'} className={({ isActive }) => handleClassName({ isActive })}>Profile</NavLink>
                        <div to={'/profile'} className={styles.NavLinkBtn} onClick={HandleLogout}>LogOut</div>
                    </>
                    :
                    <>
                        <NavLink to={'/'} className={({ isActive }) => handleClassName({ isActive })}>Home</NavLink>
                        <NavLink to={'/login'} className={({ isActive }) => handleClassName({ isActive })}>Login</NavLink>
                        <NavLink to={'/register'} className={({ isActive }) => handleClassName({ isActive })}>Register</NavLink>
                    </>
                }
            </Stack>
            <Stack>
                <Button onClick={toggleMode} variant={mode === 'dark' ? 'contained' : 'outlined'} >{mode === 'dark' ? 'light' : 'dark'}</Button>
            </Stack>

        </Stack>
    )
}

