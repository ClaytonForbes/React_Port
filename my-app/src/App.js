import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Homescreen";

const App=() =>{
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* This will be the First page rendered or lodded up  */} 
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            {/* This is a default for all routes that are not registered  */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;