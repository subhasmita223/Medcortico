import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import HeartDiseaseForm from './components/HeartDiseaseForm/HeartDiseaseForm';

import "./App.css";

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is "/landing"
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`flex ${isLandingPage ? 'w-full' : ''}`}>
      {!isLandingPage && <Sidebar />} {/* Render Sidebar only if not on Landing Page */}
      <main className={isLandingPage ? 'flex-1 w-full px-0' : 'flex-1 ml-64 md:ml-16'}>
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/heart-disease-form" element={<HeartDiseaseForm />} />

        </Routes>
      </Layout>
      
    </Router>
  );
};

export default App;

