import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import HeartDiseaseForm from './components/HeartDiseaseForm/HeartDiseaseForm';
import ParkinsonsDiseaseForm from './components/ParkinsonsDiseaseForm/ParkinsonsDiseaseForm';
import DiabetesDiseaseForm from './components/DiabetesDiseaseForm/DiabetesDiseaseForm';

import "./App.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className={`flex min-h-screen ${isLandingPage ? 'w-full' : ''}`}>
      {!isLandingPage && <Sidebar />}
      <main className={`${isLandingPage ? 'flex-1 w-full px-0' : 'flex-1 p-4 md:p-6 ml-0 md:ml-16'}`}>
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
          <Route path="/heart-disease-detection" element={<HeartDiseaseForm />} />
          <Route path="/parkinsons-disease-detection" element={<ParkinsonsDiseaseForm />} />
          <Route path="/diabetes-disease-detection" element={<DiabetesDiseaseForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


