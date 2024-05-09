import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('userId') : null
  );
  const [userType, setUserType] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('userType') : null
  );
  const [token, setToken] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('token') : null
  );
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userId', userId);
      localStorage.setItem('userType', userType);
      localStorage.setItem('token', token);
    }
  }, [userId, userType, token]);

  const login = (userId, userType, token) => {
    setIsLoggedIn(true);
    setUserId(userId);
    setUserType(userType);
    setToken(token);
    setLoading(false); // Set loading to false after the user data has been set
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUserType(null);
    setToken(null);
    setLoading(true); 
    // localStorage.removeItem('userId');
    // localStorage.removeItem('appointmentIds');
    // Set loading to true when the user logs out
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userId');
      localStorage.removeItem('userType');
      localStorage.removeItem('token');
    }
  };

  const value = {
    isLoggedIn,
    userId,
    userType,
    token,
    login,
    logout,
    loading, // Include loading in the context value
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}