import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Appointments from './components/Appointments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Specialities from './components/Specialities';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;