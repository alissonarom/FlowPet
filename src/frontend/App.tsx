/* eslint-disable */
/* prettier-ignore */

import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import theme from "./styles/theme";
import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Shopping from "./pages/Shopping";
// import Treatments from "./pages/Treatments";
// import PetHotel from "./pages/PetHotel";
import Adoption from "./pages/Adoption";
import PetProfile from "./pages/PetProfile";
// import Orders from "./pages/Orders";
import UserProfile from "./pages/UserProfile";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/pet-hotel" element={<PetHotel />} /> */}
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/pet-profile" element={<PetProfile />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;