import React from "react";
import Sidebar from "./components/Sidebar";
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;


const App: React.FC = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      <Sidebar />
    </div>
  );
};

export default App;
