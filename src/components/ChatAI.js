import { AiOutlineSend, AiFillHome } from "react-icons/ai";
import React from "react";
import logo from "../data/daikin-logo.png";
import bot from "../data/Bot.png";
import bgImage from "../data/Bg.jpg";

function ChatAI() {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Header Section */}
      <header className="flex items-center justify-between w-full px-4 py-2">
        <img src={logo} alt="Daikin Logo" className="w-48" />
        <button className="text-[#00B3FF] flex items-center">
          <AiFillHome className="w-9 h-9" />
        </button>
      </header>

      <div className="justify-center mt-10">
        {/* Main Section */}
        <main className="text-center justify-center px-8 py-6">
          {/* AI Icon */}
          <div className="flex justify-center items-center bg-[#00B3FF] w-28 h-13 rounded-full mx-auto mb-6">
            <img src={bot} alt="AI Icon" className="w-14 h-11" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-56">
            Ask our AI anything
          </h1>

          {/* Suggestions Section */}
          <div className="text-center">
            <p className="text-[#56637E] mb-4 font-medium text-left w-full ">
              Suggestions on what to ask Our AI
            </p>
            <div className="flex flex-wrap justify-center font-montserrat gap-4">
              <button className="bg-white bg-opacity-50 text-[#160211] border-2 border-white  px-4 py-2 rounded-lg ">
                What can I ask you to do?
              </button>
              <button className="bg-white bg-opacity-50 text-[#160211] border-2 border-white  px-4 py-2 rounded-lg">
                How to check for, or what do the fault codes mean?
              </button>
              <button className="bg-white bg-opacity-50 text-[#160211] border-2 border-white  px-4 py-2 rounded-lg">
                Request for a general service or clean of your air conditioner.
              </button>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex items-center mt-8 border-2 rounded-md overflow-hidden shadow-md bg-white">
            <input
              type="text"
              placeholder="Ask me anything about your projects"
              className="flex-grow px-4 py-1 focus:outline-none text-gray-700 bg-white"
            />
            <button className="px-4 py-1 text-gray-400 hover:text-gray-600">
              <AiOutlineSend className="w-8 h-8" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChatAI;
