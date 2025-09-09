import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import UserDetails from "./Components/UserDetails/UserDetails";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      {/* Navigation always visible */}
      <Nav />

      {/* Routes */}
      <Routes>
        <Route path="/mainhome" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/userdetails" element={<UserDetails />} />

        {/* Redirect root path to /mainhome */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
