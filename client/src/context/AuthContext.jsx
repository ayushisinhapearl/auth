import React from 'react'
import { createContext, useState, useContext } from 'react'
import { loginService, signupService } from "../services/AuthService";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        const userData = await loginService(credentials);
        setUser(userData);
    };

    const signup = async (useInfo) => {
        const userData = await signupService(userInfo);
        setUser(userData);
    };    

    const logout = () => {
        setUser(null);
      };

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);