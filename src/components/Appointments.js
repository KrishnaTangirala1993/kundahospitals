import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "antd";
import "./Appointment.css";
function Appointment() {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		date: "",
		time: "",
		email: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.send(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				formData,
				"YOUR_USER_ID"
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert(
						"Thanks for booking the appointment. We will get back to you as soon as possible."
					);
				},
				(error) => {
					console.log("FAILED...", error);
					alert("Failed to send appointment request.");
				}
			);
	};
	return (
		<div className="appointments-div">
			<h2 className="heading">Book an Appointment</h2>

			<div className="appointment">
				<form onSubmit={handleSubmit} className="form-card">
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="Enter your name"
					/>
					<label>Phone Number:</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						required
						placeholder="Enter your phone number"
					/>
					<label>Date:</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
						required
					/>
					<label>Time:</label>
					<input
						type="time"
						name="time"
						value={formData.time}
						onChange={handleChange}
						required
					/>
					<label>Email ID:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						// required
						placeholder="Enter your E-mail id"
					/>
					<button type="submit">Submit</button>
					{/* <Button type='primary'> Submit</Button> */}
				</form>
			</div>
		</div>
	);
}
export default Appointment;
