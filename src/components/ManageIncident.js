import React, { useState } from "react";

const ManageIncident = () => {
  const [activeTab, setActiveTab] = useState("Recent Incident");

  const incidents = [
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "AC",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Pending",
    },
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "Chiller",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Resolved",
    },
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "AC",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Pending",
    },
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "Ducted",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Close",
    },
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "FCU",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Close",
    },
    {
      id: "#212234",
      date: "Today | 10:12pm",
      type: "Air Purification",
      issue: "Credit",
      modelId: "CT/01/2231",
      status: "Resolved",
    },
  ];

  const filteredIncidents =
    activeTab === "Recent Incident"
      ? incidents
      : incidents.filter((incident) => incident.status === activeTab);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-500";
      case "Resolved":
        return "bg-green-100 text-green-500";
      case "Close":
        return "bg-red-100 text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-[36px] text-[#3C4E60] font-semibold leading-[43.88px] mb-2">
        Manage Incident
      </h1>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-6">
          {["Recent Incident", "Pending", "Resolved", "Close"].map((tab) => (
            <button
              key={tab}
              className={`font-medium border-b-2 ${
                activeTab === tab
                  ? "border-black"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <select className="p-2 border rounded">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">Contracts</th>
            <th className="border px-4 py-2">Incident ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Issue</th>
            <th className="border px-4 py-2">Model ID</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredIncidents.map((incident, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2 flex items-center gap-2">
                <img
                  src="/images/dummay-data.png"
                  alt="Product"
                  className="w-10 h-10 rounded"
                />
                <span>Product Name</span>
              </td>
              <td className="border px-4 py-2">{incident.id}</td>
              <td className="border px-4 py-2">{incident.date}</td>
              <td className="border px-4 py-2">{incident.type}</td>
              <td className="border px-4 py-2">{incident.issue}</td>
              <td className="border px-4 py-2">{incident.modelId}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusClasses(
                    incident.status
                  )}`}
                >
                  {incident.status}
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredIncidents.length === 0 && (
        <p className="text-center text-gray-500 py-4">No incidents found.</p>
      )}
    </div>
  );
};

export default ManageIncident;
