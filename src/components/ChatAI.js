import React from "react";

const ChatAI = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mt-8">Chat AI</h1>
      <div className="flex flex-col w-1/2 bg-white p-4 rounded shadow mt-4">
        <input
          type="text"
          className="border p-2 rounded mb-2"
          placeholder="Type a message"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAI;
