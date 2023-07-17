import React, { useState } from "react";
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import ContactPage from '../Containers/Contact';
import AboutPage from '../Containers/About';
import HomePage from '../Containers/Home';
import EventPanelPage from '../Containers/EventPanel';
import LoginPage from '../Containers/Login';
import FooterComponent from '../Components/Footer';
import HeaderComponent from '../Components/Header';
const RouteConfigFile = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    const ProtectedRoute = (props)=>{
        // isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />
        return isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />;
    }
    return(
        <>
            <BrowserRouter>
                <HeaderComponent handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
                <Routes>
                    <Route path='/' element={<HomePage loginStatus={isLoggedIn}/>} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/eventpanel' element={<ProtectedRoute />} />
                    <Route path='/login' element={<LoginPage handleLogin={handleLogin} isLoggedIn={isLoggedIn} />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteConfigFile;
