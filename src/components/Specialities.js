import React, { useEffect, useState } from "react";
import "./Specialities.css";

const Specialities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(200);
  const [cardMargin, setCardMargin] = useState(60);

  useEffect(() => {
    setCurrentIndex(0);
    updateCardDimensions();
    window.addEventListener("resize", updateCardDimensions);
    return () => window.removeEventListener("resize", updateCardDimensions);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".specialities-container");
    if (container) {
      container.style.width = `${container.children.length * (cardWidth + cardMargin * 2)}px`;
    }
  }, [cardWidth, cardMargin]);

  const updateCardDimensions = () => {
    const width = window.innerWidth;
    if (width <= 576) {
      setCardWidth(120);
      setCardMargin(10);
    } else if (width <= 768) {
      setCardWidth(140);
      setCardMargin(15);
    } else if (width <= 992) {
      setCardWidth(160);
      setCardMargin(20);
    } else if (width <= 1200) {
      setCardWidth(180);
      setCardMargin(25);
    } else {
      setCardWidth(200);
      setCardMargin(30);
    }
  };

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const moveRight = () => {
    const container = document.querySelector(".specialities-container");
    const maxIndex = container.children.length - 1;
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const flipCard = (e) => {
    e.currentTarget.classList.toggle("flipped");
  };

  return (
    <div className="specialities-wrapper">
      <button className="arrow left-arrow" onClick={moveLeft}>
        &#9664;
      </button>
      <div
        className="specialities-container"
        style={{
          transform: `translateX(-${currentIndex * (cardWidth + cardMargin * 2)}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="ortho.jpg" alt="Speciality 1" className="card-image" />
            <h3 className="card-title">Orthopedician</h3>
          </div>
          <div className="card-back">
            <p className="card-description">2000-2006-MBBS</p>
          </div>
        </div>
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="image2.jpg" alt="Speciality 2" className="card-image" />
            <h3 className="card-title">Orthodontist</h3>
          </div>
          <div className="card-back">
            <p className="card-description">Description for Speciality 2</p>
          </div>
        </div>
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="cardio.jpg" alt="Speciality 3" className="card-image" />
            <h3 className="card-title">Cardiologist</h3>
          </div>
          <div className="card-back">
            <p className="card-description">Description for Speciality 3</p>
          </div>
        </div>
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="derma.jpg" alt="Speciality 4" className="card-image" />
            <h3 className="card-title">Dermatologist</h3>
          </div>
          <div className="card-back">
            <p className="card-description">Description for Speciality 4</p>
          </div>
        </div>
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="generalmedicine.jpg" alt="Speciality 5" className="card-image" />
            <h3 className="card-title">General Medicine</h3>
          </div>
          <div className="card-back">
            <p className="card-description">Description for Speciality 5</p>
          </div>
        </div>
        <div className="card" onClick={flipCard}>
          <div className="card-front">
            <img src="physician.jpg" alt="Speciality 6" className="card-image" />
            <h3 className="card-title">Physician</h3>
          </div>
          <div className="card-back">
            <p className="card-description">Description for Speciality 6</p>
          </div>
        </div>
      </div>
      <button className="arrow right-arrow" onClick={moveRight}>
        &#9654;
      </button>
    </div>
  );
};

export default Specialities;
