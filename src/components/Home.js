import React from 'react';
import './Home.css';
import Appointment from "./Appointments";
import Contact from "./Contact";
import Specialities from "./Specialities";

const hospitalImage = process.env.PUBLIC_URL + '/kundahospital.jpg';

function Home() {
  return (
		<>
			<div className="home-container">
				<div className="home-content">
					<h1 className="half-underline">
						About Kunda Hospitals, Vijayawada, India
					</h1>
					<h2>Setting New Benchmark in Health Care</h2>
					<p>
						Kunda Group of Hospitals has been providing quality
						healthcare for the people in their diverse medical
						needs. People trust us because of the strong
						relationships we’ve built with them over the years.
					</p>
					<p>
						Under astute leadership and strong management, Kunda
						Group of Hospitals has evolved as a centre of excellence
						in medicine providing the highest quality standards of
						medical treatment to all sections of the society. Our
						work has always been guided by the needs of patients and
						delivered by our perfectly combined revolutionary
						technology, best medical expertise and advanced
						procedures.
					</p>
					<p>
						We offer sophisticated diagnostic and therapeutic care
						in virtually every specialty and subspecialty of
						medicine and surgery.
					</p>
					<ul>
						<li>4 independent hospitals</li>
						<li>4 Heart Institutes</li>
						<li>4 Cancer Institutes</li>
						<li>4000 Beds</li>
						<li>62 Medical specialties</li>
						<li>700 Specialist doctors</li>
					</ul>
					<p>
						Constantly pushing our horizons to excellence, we are
						continuously seeking solutions to provide better patient
						care by improving our overall facilities of hospital
						management and at the same time ensuring control on the
						patient cost.
					</p>
					<p>
						To provide world-class healthcare services at affordable
						costs, in all medical departments.
					</p>
					
				</div>
				<div className="home-image">
					<img src={hospitalImage} alt="Kunda Hospitals" />
				</div>
      </div>
      <Appointment />
      <Specialities />
      <Contact/>
		</>
  );
}
export default Home;