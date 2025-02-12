import React, { useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Team from "./pages/Team";

const DRAWER_WIDTH = 240; 
const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header toggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: isSidebarOpen ? `${DRAWER_WIDTH}px` : "0px",
            marginTop: "64px", 
            transition: "margin 0.3s ease-in-out",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/team" element={<Team />} />

            </Routes>
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
