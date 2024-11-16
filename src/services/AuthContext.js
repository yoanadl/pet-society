import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const users = [
    { email: 'admin@mail.com', password: 'admin', role: 'admin' },
    { email: 'user@mail.com', password: 'user', role: 'user' },
  ];

  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setRole(user.role);
      setUserEmail(user.email);
      return { success: true, role: user.role };
    }
    return { success: false };
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole('');
    setUserEmail('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

