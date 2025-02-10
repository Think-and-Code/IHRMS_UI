import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Licensing from "./pages/Licensing";
import Updates from "./pages/Updates";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <div className="relative">
        <Header/>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <Suspense fallback={<div className="spinner px-15">Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/About" element={<About />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Licensing" element={<Licensing />} />
              <Route path="/Updates" element={<Updates />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
