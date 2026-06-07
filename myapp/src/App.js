import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AI from "./pages/AI";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import ML from "./pages/ML";
import OOP from "./pages/OOP";
import Software from "./pages/Software";
import Architecture from "./pages/Architecture";
import DigitalLogic from "./pages/DigitalLogic";
import Robotics from "./pages/Robotics";
import Meeting from "./pages/Meeting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web" element={<Web />} />
        <Route path="/ml" element={<ML />} />
        <Route path="/oop" element={<OOP />} />
        <Route path="/soft" element={<Software />} />
        <Route path="/cr" element={<Architecture />} />
        <Route path="/dl" element={<DigitalLogic />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/meeting" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;