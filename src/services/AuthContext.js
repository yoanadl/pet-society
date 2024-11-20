import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const users = [
    { email: 'admin@mail.com', password: 'admin', role: 'admin' },
    { email: 'user@mail.com', password: 'user', role: 'user' },
  ];

  useEffect(() => {
    const email = localStorage.getItem("userEmail") || null;
    setUserEmail(email);
  }, []);


  const register = (email, password, role) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || users; // Default to existing users array
    const userExists = existingUsers.some(user => user.email === email);
  
    if (userExists) {
      return { success: false, message: 'User already exists' };
    }
  
    const newUser = { email, password, role };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  
    return { success: true, message: 'User registered successfully' };
  };
  

  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || users; // Include default users
    const user = existingUsers.find(user => user.email === email && user.password === password);
  
    if (user) {
      setIsLoggedIn(true);
      setRole(user.role);
      setUserEmail(user.email);
      return { success: true, role: user.role };
    }
    return { success: false, message: 'Invalid email or password' };
  };
  

  const logout = () => {
    setIsLoggedIn(false);
    setRole('');
    setUserEmail('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, userEmail, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

