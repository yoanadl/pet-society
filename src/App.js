import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext.js'; 
import Home from './pages/home.jsx';
import PetList from './pages/petlist.jsx';
import Forms from './pages/forms.jsx';
import AdminDashboard from './pages/adminDashboard.jsx';
import UserForm from './pages/userForms.jsx';
import FAQ from './pages/faq.js'
import Donation from './pages/donation.jsx';
import Adoption from './pages/adoption.jsx';
import Volunteer from './pages/volunteer.jsx';
import Release from './pages/release.jsx';

function App() {

  return (
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petlist" element={<PetList />} />
          <Route path="/forms" element={<Forms />} />
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path="/user-forms" element={<UserForm />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/release" element={<Release />} />




        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
