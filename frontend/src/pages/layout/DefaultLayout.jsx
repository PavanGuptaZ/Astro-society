import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { AdminPage } from '../AdminPage';
import { ProfilePage } from '../ProfilePage';
import { PageNotFound } from '../PageNotFound';
import { LoginAndRegisterPage } from '../LoginAndRegisterPage';
import CssBaseline from '@mui/material/CssBaseline';
import { NavigationBar } from '../../components/NavigationBar';
import { LoadingComponent } from '../../components/LoadingComponent';
import { useSelector } from 'react-redux';
import { currentUser } from '../../features/authSlice';
import { useRefreshUserMutation } from '../../features/authApiSlice';
import { useEffect, useState } from 'react';

export const DefaultLayout = () => {
    const user = useSelector(currentUser)
    const [loaded, setLoaded] = useState(false)

    const [refresh, { isLoading, isUninitialized }] = useRefreshUserMutation()
    useEffect(() => {

        async function verifyRefreshToken() {
            await refresh()
            setLoaded(true)
        }
        verifyRefreshToken()
        // eslint-disable-next-line 
    }, [])
    if (isLoading) {
        return <LoadingComponent />
    } else if (!user && isUninitialized) {
        return <LoadingComponent />
    } else if (!loaded) {
        return <LoadingComponent />
    } else {
        return (
            <div className='FullBox'>
                <CssBaseline />
                <NavigationBar />
                <div className='contentBox'>
                    <Routes>
                        <Route path='/' element={user ? <AdminPage /> : <HomePage />} />
                        <Route path='/login' element={<LoginAndRegisterPage type="login" />} />
                        <Route path='/register' element={<LoginAndRegisterPage type="register" />} />
                        <Route path='/profile' element={user ? <ProfilePage /> : <LoginAndRegisterPage type='login' state={'dd'} />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </div>
            </div>
        )
    }
}