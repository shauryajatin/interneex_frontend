import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      const { token, user: userData } = response.data;

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify({ email, token }));
      setUser({ email, token });
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const signup = async (name, email, number, password) => {
    try {
      await axios.post('http://localhost:3001/api/register', { name, email, number, password });
      // After successful registration, log in the user
      await login(email, password);
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
