import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Service from "./routes/Service";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />



    </div>
  )
}

export default App;
