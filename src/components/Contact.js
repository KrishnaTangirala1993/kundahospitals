import React from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const hospitalImage = process.env.PUBLIC_URL + "/contact.jpg";
function Contact() {
	return (
		<div className="contact-container">
			<div className="contact-card">
				<h1 className="contact-title">
					<i className="fas fa-phone"></i> Phone Number
				</h1>
				<div className="contact-details">
					<p className="contact-phone">Phone: 0866-3500670</p>
				</div>
			</div>
			<div className="contact-card">
				<h1 className="contact-title">
					<i className="fas fa-envelope"></i> Email
				</h1>
				<div className="contact-details">
					<p className="contact-email">
						Email:{" "}
						<a
							href="mailto:ravishankarpisini@gmail.com"
							className="email-link"
						>
							kundahospitals@gmail.com
						</a>
					</p>
				</div>
			</div>
			<div className="contact-card">
				<h1 className="contact-title">
					<i className="fas fa-map-marker-alt"></i> Address
				</h1>
				<div className="contact-details">
					<p className="contact-location">
						23-15-86, G S Raju Rd, opposite seethanna peta water
						tank, Satyaranayana Puram, Vijayawada, Andhra Pradesh
						520011
					</p>
				</div>
			</div>
			<div className="contact-card">
				<h1 className="contact-title">Follow us on</h1>
				<div className="contact-details">
					<p className="contact-location">
						<div className="icon">
							{" "}
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebook /> Facebook
							</a>
						</div>
						<div>
							{" "}
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</a>{" "}
							Instagram
						</div>
						<div>
							{" "}
							<a
								href="https://www.youtube.com/@kundahospitals8399"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaYoutube />
							</a>{" "}
							Youtube
						</div>
					</p>
				</div>
			</div>
			<div className="contact-image">
				<img src={hospitalImage} alt="Yashoda Hospitals" />
			</div>
		</div>
	);
}
export default Contact;
