import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeartbeat, faBrain, faSyringe, faVial } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClick = (e) => {
    e.preventDefault();
    setIsFormOpen(!isFormOpen);
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 flex items-center">
        <img
          src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-400">John1980</p>
        </div>
      </div>
      <ul className="p-4 flex-1">
        <li className="mb-4">
          <a href="/Profile" className="hover:text-blue-400">Profile</a>
        </li>
        <li className="mb-4">
          <a href="/" className="hover:text-blue-400">Dashboard</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-blue-400">Activity</a>
        </li>
        <li className="mb-4">
          <a href="#" className="hover:text-blue-400">Nutrition</a>
        </li>
        <li className="mb-4 cursor-pointer" onClick={handleFormClick}>
          <div className="flex items-center justify-center">
          
            <span className="hover:text-blue-400">Disease Detection System</span>
            <FontAwesomeIcon icon={faChevronDown} className={`transition-transform ${isFormOpen ? 'rotate-180' : ''}`} />
          </div>
        </li>
        {isFormOpen && (
          <ul className="pl-4">
            <li className="mb-4 flex items-center justify-start">
              <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-red-500" />
              <a href="/heart-disease-detection" className="hover:text-blue-400">Heart Disease Detection</a>
            </li>
            <li className="mb-4 flex items-center justify-evenly">
              <FontAwesomeIcon icon={faBrain} className="mr-2 text-purple-500" />
              <a href="/parkinsons-disease-detection" className="hover:text-blue-400">Parkinson's Disease Detection</a>
            </li>
            <li className="mb-4 flex items-space-between">
              <FontAwesomeIcon icon={faSyringe} className="mr-2 text-blue-500" />
              <a href="/diabetes-disease-detection" className="hover:text-blue-400">Diabetes Disease Detection</a>
            </li>
          </ul>
        )}
        <li className="mt-8">
          <a href="#" className="hover:text-blue-400">Settings</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
