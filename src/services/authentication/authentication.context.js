import React, { useState, createContext } from 'react';
import { loginRequest } from './authentication.service';
import { getAuth, inMemoryPersistence } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {  
  const auth = getAuth();
  auth.setPersistence(inMemoryPersistence); 
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
       .then((userData) => {
        setUser(userData);
        setIsLoading(false);
        setIsAuthenticated(true);
       })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        setIsAuthenticated(false);
      });      
  }

  return (
    <AuthenticationContext.Provider 
      value={{
       user,
       isLoading,
       error,
       onLogin,
       isAuthenticated
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}



