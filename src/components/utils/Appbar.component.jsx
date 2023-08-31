import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Box, Container, IconButton, Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";

const AppbarComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Container
          sx={{
            height: "8vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "col",
              marginY: 1,
              alignItems: "center",
            }}
          >
            <AccountBalanceIcon />
            <Link to={"/"}>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  ml: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                BANK
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "col",
              marginY: 1,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mr: 2,
                color: "white",
              }}
            >
              CodewithAshith
            </Typography>
            <IconButton
              sx={{ color: "white" }}
              onClick={() => navigate("/login")}
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppbarComponent;
