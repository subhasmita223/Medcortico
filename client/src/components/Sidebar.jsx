import React from 'react';

const Sidebar = () => {
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
          <a href="/Profile" className="hover:text-blue-400 ">Profile</a>
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
        <li>
          <a href="#" className="hover:text-blue-400">Settings</a>
        </li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;
