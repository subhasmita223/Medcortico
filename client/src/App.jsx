import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'; 

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 md:ml-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
