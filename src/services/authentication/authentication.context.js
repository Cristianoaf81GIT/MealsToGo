import React, { useState, createContext } from 'react';
import { getAuth } from 'firebase/auth';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
       .then((userData) => {
        setUser(userData);
        setIsLoading(false);
       })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });    
  }

  return (
    <AuthenticationContext.Provider 
      value={{
       user,
       isLoading,
       error,
       onLogin       
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}



