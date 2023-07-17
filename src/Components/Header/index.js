import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context';
const HeaderComponent = ()=>{
    const { handleLogout, isLoggedIn, userInfo } = useAuth();
    const name = userInfo && userInfo.firstName !== '' ? userInfo.firstName : '';
    const menuJson = [
        {
            title:"About",
            url:"/about",
            auth:false
        },
        {
            title:"Contact",
            url:"/contact",
            auth:false
        },
        {
            title:"Event Show",
            url:"/eventpanel",
            auth:false
        },
    ]
    return (
        <>
            <header className='py-2 rounded-4xl bg-slate-200'>
                <div className='mx-auto max-w-7xl px-4'>
                    <nav className='relative z-50 flex justify-between'>
                        <div className='flex items-center md:gap-x-12'>
                            <Link to='/'>
                                <img src='https://economictimes.indiatimes.com/photo/89824128.cms' className='w-10' alt='ET Logo' />
                            </Link>
                            <div className='md:flex md:gap-x-6'>
                                {
                                    menuJson.map((item)=>{
                                        return (
                                            <Link key={item.url} className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' to={item.url}>{item.title}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='flex items-center gap-x-5 md:gap-x-8'>
                            <div className='md:block'>
                                {
                                    name ? <span>Welcome back <span className='font-semibold bg-slate-300 p-1 text-sm'>{name}</span></span> : ''
                                }
                                {
                                    isLoggedIn ? <span className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' onClick={handleLogout}>Sign Out</span> :  <Link to="/login" className='inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900'>Sign in</Link>
                                }
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent;