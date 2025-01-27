import React from "react";

const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen font-montserrat">
      <div className="p-6">
        <h1 className="text-[36px] text-[#3C4E60] font-semibold leading-[43.88px] mb-2">
          Dashboard
        </h1>

        <div className="grid grid-cols-5 gap-6 mb-6">
          {[
            {
              title: "Total Incident",
              value: "110",
              percent: "4.07%",
              positive: true,
            },
            {
              title: "Pending Incident",
              value: "35",
              percent: "1.07%",
              positive: true,
            },
            {
              title: "Resolved Incident",
              value: "45",
              percent: "1.66%",
              positive: false,
            },
            {
              title: "Close Incident",
              value: "30",
              percent: "4.07%",
              positive: true,
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-gray-600 text-sm">{metric.title}</h3>
                <p className="text-2xl font-semibold text-gray-800">
                  {metric.value}
                </p>
                <p
                  className={`text-sm ${
                    metric.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.percent}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full">
                <span className="text-blue-500 font-bold">📊</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-600 text-sm mb-2">Incident Trends</h3>
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Line Chart</span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-gray-600 text-sm mb-2">Incident Status</h3>
              <div className="h-32 w-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-500">75%</span>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-gray-600 text-sm mb-2">Product Breakdown</h3>
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Chart</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-600 text-sm mb-2">Select Product</h3>
          <div className="grid grid-cols-5 gap-4">
            {Array(10)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg flex flex-col items-center p-4"
                >
                  <div className="h-16 w-16 bg-gray-100 rounded-lg mb-2">
                    <span className="text-gray-500">Image</span>
                  </div>
                  <p className="text-gray-600 text-sm">Air conditioner</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
