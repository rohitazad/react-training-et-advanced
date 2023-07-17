import React from 'react';
import LayoutComponent from '../../Components/Layout';
import { useAuth } from '../../Context';
const HomePage = ()=>{
    const { isLoggedIn, userInfo } = useAuth();
    console.log('userInfo',userInfo)
    const name = userInfo && userInfo.firstName !== '' ? userInfo.firstName : '';
    return (
        <>
            {
                <LayoutComponent>
                    <h1 className='pt-8 mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900'>DashBoard</h1>
                    {
                        isLoggedIn ? `Welcome Back ${name}` : 'Your are not login please login'
                    }
                </LayoutComponent>
            }
            
        </>
    )
}

export default HomePage;
