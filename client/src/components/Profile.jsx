
import React from 'react';

const Profile = () => {
  return (
    <div className="flex-1 p-4 md:p-6">
      <header className="text-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">User Profile</h1>
      </header>


      <section className="mb-6 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4">
        <img
          src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg"
          alt="User Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">John Doe</h2>
          <p className="text-gray-600">Active Member</p>
          <p className="text-gray-400 mt-2">Joined: January 2023</p>
        </div>
      </section>


      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Total Steps</h2>
          <p className="text-2xl md:text-4xl font-bold">150,000</p>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Total Calories</h2>
          <p className="text-2xl md:text-4xl font-bold">35,000</p>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Total Distance</h2>
          <p className="text-2xl md:text-4xl font-bold">1200 km</p>
        </div>
      </section>


      <section className="mt-6 md:mt-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Activity Overview</h2>
          <div className="w-full">

            <p className="text-center text-gray-600">Chart goes here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
