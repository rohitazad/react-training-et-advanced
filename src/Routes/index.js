import React from "react";
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import ContactPage from '../Containers/Contact';
import AboutPage from '../Containers/About';
import HomePage from '../Containers/Home';
import EventPanelPage from '../Containers/EventPanel';
import LoginPage from '../Containers/Login';
import FooterComponent from '../Components/Footer';
import HeaderComponent from '../Components/Header';
import { useAuth } from '../Context';
const RouteConfigFile = ()=>{
    const {isLoggedIn } = useAuth();
    const ProtectedRoute = (props)=>{
        // isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />
        return isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />;
    }
    return(
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/eventpanel' element={<ProtectedRoute />} />
                    <Route path='/login' element={<LoginPage />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteConfigFile;
