import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to consume the AuthContext
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider component to wrap the application with the AuthContext
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({});
  
    // Function to handle login
    const handleLogin = (userDetail) => {
      // Perform login logic (e.g., check credentials, set isLoggedIn to true)
      // For simplicity, we assume successful login here
      setUserInfo({...userDetail})
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedInUser', JSON.stringify(userDetail));
    };
  
    // Function to handle logout
    const handleLogout = () => {
      // Perform logout logic (e.g., clear credentials, set isLoggedIn to false)
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedInUser');
      setUserInfo({})
    };
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedInUser');
        if (storedLoginStatus !== null) {
            var userInfoData = JSON.parse(storedLoginStatus)
            setUserInfo({...userInfoData})
            setIsLoggedIn(true);
        }
      }, []);
  
    // Provide the AuthContext value to child components
    const authContextValue = {
      isLoggedIn,
      handleLogin,
      handleLogout,
      userInfo,
    };
    return (
        <AuthContext.Provider value={authContextValue}>
          {children}
        </AuthContext.Provider>
      );
    }