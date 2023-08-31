import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarComponent = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: blue[700],
        height: "92vh",
      }}
    >
      <Link to={"/"}>
        <Box
          sx={{
            paddingX: 8,
            paddingY: 2,
            borderTop: 1,
            borderBottom: 1,
            borderColor: blue[50],
            backgroundColor: location.pathname === "/" ? "white" : blue[700],
            color: location.pathname === "/" ? blue[900] : "white",
            cursor: "pointer",
          }}
        >
          Dashboard
        </Box>
      </Link>

      <Link to={"/accountDetails"}>
        <Box
          sx={{
            paddingX: 8,
            paddingY: 2,
            borderBottom: 1,
            backgroundColor:
              location.pathname === "/accountDetails" ? "white" : blue[700],
            color:
              location.pathname === "/accountDetails" ? blue[900] : "white",
            cursor: "pointer",
          }}
        >
          Account Details
        </Box>
      </Link>
      <Link to={"/transfer"}>
        <Box
          sx={{
            paddingX: 8,
            paddingY: 2,
            borderBottom: 1,
            backgroundColor:
              location.pathname === "/transfer" ? "white" : blue[700],
            color: location.pathname === "/transfer" ? blue[900] : "white",
            cursor: "pointer",
          }}
        >
          Fund Transfer
        </Box>
      </Link>
      <Link to={"/accountStatement"}>
        <Box
          sx={{
            paddingX: 8,
            paddingY: 2,
            borderBottom: 1,
            backgroundColor:
              location.pathname === "/accountStatement" ? "white" : blue[700],
            color:
              location.pathname === "/accountStatement" ? blue[900] : "white",
            cursor: "pointer",
          }}
        >
          Account Statement
        </Box>
      </Link>
    </Box>
  );
};

export default SideBarComponent;
