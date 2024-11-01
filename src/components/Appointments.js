import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Appointment.css';
function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    email: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks for booking the appointment. We will get back to you as soon as possible.');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send appointment request.');
      });
  };
  return (
    <div className="appointment">
      <form onSubmit={handleSubmit}>
        <h1>Book an Appointment</h1>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Email ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Appointment;