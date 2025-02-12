import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Avatar } from "@mui/material";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1c1e26",
      }}
    >
      <Toolbar>
        <img
          src={logo}
          alt="Logo"
          className="h-10 object-contain content-center flex items-center justify-center w-full"
        />

        <Box sx={{ flexGrow: 1 }} />

        <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "white", color: "#1c1e26" }}>U</Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: "45px" }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
