import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../utils/Navbar.component";

const SharedNavBarComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};

export default SharedNavBarComponent;
