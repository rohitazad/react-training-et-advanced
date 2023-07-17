import React from 'react';
import LayoutComponent from '../../Components/Layout';
const HomePage = ({loginStatus})=>{
    return (
        <>
            {
                <LayoutComponent>
                    <h1 className='text-lg text-gray-900 font-bold'>Hello i m Index page</h1>
                    {
                        loginStatus ? 'Welcome back ' : 'Your are not login'
                    }
                </LayoutComponent>
            }
            
        </>
    )
}

export default HomePage;
