import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mt-8">Dashboard</h1>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
