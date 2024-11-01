import React from 'react';
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const hospitalImage = process.env.PUBLIC_URL + '/contact.jpg';
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title"><i className="fas fa-phone"></i> Phone Number</h1>
        <div className="contact-details">
          <p className="contact-phone">Phone: 0866-3500670</p>
        </div>
      </div>
      <div className="contact-card">
        <h1 className="contact-title"><i className="fas fa-envelope"></i> Email</h1>
        <div className="contact-details">
          <p className="contact-email">Email: kundahospitals@gmail.com</p>
        </div>
      </div>
      <div className="contact-card">
        <h1 className="contact-title"><i className="fas fa-map-marker-alt"></i> Address</h1>
        <div className="contact-details">
          <p className="contact-location">23-15-86, G S Raju Rd, opposite seethanna peta water tank, Satyaranayana Puram, Vijayawada, Andhra Pradesh 520011</p>
        </div>
      </div>
      <div className="contact-image">
        <img src={hospitalImage} alt="Yashoda Hospitals" />
      </div>
    </div>
  );
}
export default Contact;