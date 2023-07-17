import React, { useEffect } from 'react';
import LayoutComponent from '../../Components/Layout';
import { useNavigate } from 'react-router-dom';
const LoginPage = ({handleLogin, isLoggedIn})=>{
    const navigate = useNavigate();
    const submitForm = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Email:', email);
        console.log('Password:', password);
        if(email !== '' && password !== ''){
            handleLogin(email,password)
            navigate('/');
        }else{
            alert('please fill email id and password')
        }
    }
    
    useEffect(()=>{
        if (isLoggedIn) {
            // If the user is already logged in, redirect to the home page
            navigate('/');
        }
    },[isLoggedIn, navigate])
    return (
        <LayoutComponent>
            <div className='relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl mt-10'>
                <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
                    

                    <form action="#" name='loginUserName' onSubmit={submitForm} className="mt-10 grid grid-cols-1 gap-y-8">
                        <div className="">
                            <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                            <input id="email" type="email" name="email" autoComplete="email" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" type="password" name="password" autoComplete="current-password" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
                        </div>
                        <div>
                            <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" type="submit">
                                <span>Sign in <span aria-hidden="true">→</span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </LayoutComponent>
    )
}

export default LoginPage;
