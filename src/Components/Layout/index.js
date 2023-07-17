import React from 'react';


const LayoutComponent = ({children})=>{
    return (
        <div className='relative'>
            <div className='mx-auto max-w-7xl px-4'>
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent