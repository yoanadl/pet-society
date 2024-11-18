import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext.js'; 
import Home from './pages/home.jsx';
import PetList from './pages/petlist.jsx';
import Forms from './pages/forms.jsx';
import AboutUs from './pages/aboutUs.jsx';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petlist" element={<PetList />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/aboutUs" element={<AboutUs />} />

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
