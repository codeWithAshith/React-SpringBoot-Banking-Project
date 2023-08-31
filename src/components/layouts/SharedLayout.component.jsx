import React from "react";
import { Outlet } from "react-router-dom";
import AppbarComponent from "../utils/Appbar.component";
import SideBarComponent from "../utils/SideBar.component";
import { Box } from "@mui/material";

const SharedLayoutComponent = () => {
  return (
    <div>
      <AppbarComponent />
      <Box sx={{ display: "flex" }}>
        <SideBarComponent />
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default SharedLayoutComponent;
