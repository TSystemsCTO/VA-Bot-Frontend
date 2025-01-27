import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ManageIncident from "./components/ManageIncident";

const Contracts = () => <h1>Contracts</h1>;
const Settings = () => <h1>Settings</h1>;

const ProtectedLayout = ({ isConnected, children }) => {
  if (!isConnected) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 mt-16">{children}</main>
      </div>
    </div>
  );
};

const App = () => {
  const web3auth = useSelector((state) => state.web3Auth.web3auth);
  const isConnected = !!web3auth;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout isConnected={isConnected}>
              <Dashboard />
            </ProtectedLayout>
          }
        />
        <Route
          path="/manage-incident"
          element={
            <ProtectedLayout isConnected={isConnected}>
              <ManageIncident />
            </ProtectedLayout>
          }
        />
        <Route
          path="/contracts"
          element={
            <ProtectedLayout isConnected={isConnected}>
              <Contracts />
            </ProtectedLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedLayout isConnected={isConnected}>
              <Settings />
            </ProtectedLayout>
          }
        />
        <Route
          path="*"
          element={
            <Navigate to={isConnected ? "/dashboard" : "/login"} replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
