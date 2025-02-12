import React from "react";
import logo from '../../src/assets/logo.png';
import { AppBar, Toolbar, Box } from "@mui/material";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: "#1c1e26",
      }}
    >
      <Toolbar>
        
        <img src={logo} alt="" className="h-10 object-contain content-center flex items-center justify-center w-full" />
        <Box sx={{ flexGrow: 1 }} />
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
