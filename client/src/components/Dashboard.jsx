import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Chatbot from "./Chatbot/Chatbot";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps",
        data: [8000, 9200, 8500, 7500, 9500, 10200, 8700],
        borderColor: "#4B9CD3",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const bloodPressureOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blood Pressure This Week",
      },
    },
  };

  const bmiData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "BMI",
        data: [23.5, 24.0, 23.8, 23.7, 24.1, 24.3, 23.9],
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
      },
    ],
  };

  const bmiOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Steps This Week",
      },
    },
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Calories Burned",
        data: [1200, 1400, 1600, 1800, 2000, 2200, 2400],
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
      },
    ],
  };

  const cholesterolOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cholesterol Level Over Time",
      },
    },
  };

  const insulinData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Insulin Level",
        data: [150, 160, 145, 155, 170, 165, 160],
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
      },
    ],
  };

  const insulinOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Calories Burned",
      },
    },
  };

  return (
    <div className="">
      <div className="flex-1 p-9 md:p-6">
        <header className="text-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Health Tracking Dashboard
          </h1>
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

        <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Steps</h2>
            <p className="text-2xl md:text-4xl font-bold">8,432</p>
            <p className="text-gray-600">Today</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Calories Burned
            </h2>
            <p className="text-2xl md:text-4xl font-bold">530</p>
            <p className="text-gray-600">Today</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Heart Rate
            </h2>
            <p className="text-2xl md:text-4xl font-bold">72 bpm</p>
            <p className="text-gray-600">Resting</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">Sleep</h2>
            <p className="text-2xl md:text-4xl font-bold">7h 45m</p>
            <p className="text-gray-600">Last Night</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Water Intake
            </h2>
            <p className="text-2xl md:text-4xl font-bold">2.5 L</p>
            <p className="text-gray-600">Today</p>
          </div>
        </section>

        <section className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Weekly Activity
            </h2>
            <div className="w-full">
              <Line data={lineData} options={lineOptions} />
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Monthly Calories
            </h2>
            <div className="w-full">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
