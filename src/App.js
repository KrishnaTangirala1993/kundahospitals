import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Specialities from "./components/Specialities";
import Contact from "./components/Contact";
import Images from "./components/Images";
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
			{/* <Images/> */}
		</Router>
	);
}
export default App;

//todos

// add follow us on social media card
// book an appointment heading issue- solved
// background for different sections -solved
// instead of carosuel 2/3 cards are best view for specalisties page. so can implement one card in mobile view
// fixed header
// social media links check, email, phone number input types
// add google maps
// check emails are receiving or not
// standard colors and font family and font sizes throught out entire website
// animations throught the website like moving from left to right , right to left
// underline for navbar
// same card size and image size in the specality
// padding for entire website . maintain different background color for different section in the home page
// later add doctor photos in the specality and add telugu text instead of photo in the description



// google maps apikey AIzaSyACxC8nu3qwBkYObm-cTXjJ4YGgNl8Ya5k