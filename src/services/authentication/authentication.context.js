import React, { useState, createContext } from "react";
import {
  loginRequest,
  registerRequest,
  onAuthChange,
} from "./authentication.service";
import {
  getAuth,
  inMemoryPersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const auth = getAuth();
  auth.setPersistence(inMemoryPersistence);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthChange(auth, setUser, setIsLoading);

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
        setError(err.toString());
        setIsAuthenticated(false);
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match!");
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      registerRequest(auth, email, password)
        .then((userData) => {
          setUser(userData);
          setIsLoading(false);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.toString());
          setIsAuthenticated(false);
          setTimeout(() => {
            setError(null);
          }, 3000);
        });
    }
  };

  const onLogout = async () => {
    setIsLoading(true);
    try {
      setUser(null);
      await signOut(auth);
      setIsLoading(false);
      setIsAuthenticated(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.toString());
      setIsAuthenticated(false);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
