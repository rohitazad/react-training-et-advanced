import React from 'react';
const FooterComponent = ()=>{
    return (
        <>
            <footer className='mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8'>
                <div className='border-t border-slate-900/5 py-10'>
                    <img alt='Et Logo' src='https://economictimes.indiatimes.com/photo/89824128.cms' className='mx-auto h-5 w-auto text-slate-900' />
                    <p className='mt-5 text-center text-sm leading-6 text-slate-500'>© 2023 ET Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent;