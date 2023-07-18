import React from 'react';
import LayoutComponent from '../../Components/Layout';
import UseMemoExample from '../../Components/UseMemo';
import UseCallbackParentComponent from '../../Components/UseMemo/UseCallbackParent';
const AboutPage = ()=>{
    
    return (
        <>
        <LayoutComponent>
            <h1 className='text-lg text-gray-900 font-bold'>About us Page</h1>
            {/* <UseMemoExample /> */}
            {/* <UseCallbackParentComponent /> */}
        </LayoutComponent>
        </>
    )
}

export default AboutPage;

// https://dummyjson.com/docs/auth
