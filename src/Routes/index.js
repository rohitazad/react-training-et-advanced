import React, {Suspense} from "react";
import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom';
import FooterComponent from '../Components/Footer';
import HeaderComponent from '../Components/Header';
import { useAuth } from '../Context';

const ContactPage = React.lazy(()=> import('../Containers/Contact'));
const AboutPage = React.lazy(()=> import('../Containers/About'));
const HomePage = React.lazy(()=> import('../Containers/Home'));
const EventPanelPage = React.lazy(()=> import('../Containers/EventPanel'));
const ProdcutPage = React.lazy(()=> import('../Containers/Product'));
const LoginPage = React.lazy(()=> import('../Containers/Login'));


const RouteConfigFile = ()=>{
    const {isLoggedIn } = useAuth();
    const ProtectedRoute = (props)=>{
        // isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />
        return isLoggedIn ? <EventPanelPage {...props} /> : <Navigate to="/login" />;
    }
    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/eventpanel' element={<ProtectedRoute />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/product/:productId' element={<ProdcutPage />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default RouteConfigFile;
