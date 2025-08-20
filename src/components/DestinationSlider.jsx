// src/components/DestinationSlider.jsx
import React, { useRef, useState } from "react";
import "./DestinationSlider.css";

const destinations = [
  { name: "Explore", icon: "fire", trending: false },
  { name: "Europe", icon: "europe", trending: false },
  { name: "Maldives", icon: "maldives", trending: true },
  { name: "Ladakh", icon: "ladakh", trending: true },
  { name: "Singapore", icon: "singapore", trending: false },
  { name: "USA", icon: "usa", trending: false },
  { name: "Thailand", icon: "thailand", trending: false },
  { name: "Bali", icon: "bali", trending: true },
  { name: "NorthEast", icon: "northeast", trending: false },
  { name: "Dubai", icon: "dubai", trending: false },
];

const DestinationSlider = () => {
  const sliderRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [activeTab, setActiveTab] = useState("Tours");

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollAmount = direction === "left" ? -200 : 200;
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Show or hide left arrow based on scroll
      setTimeout(() => {
        if (slider.scrollLeft <= 10) {
          setShowLeftArrow(false);
        } else {
          setShowLeftArrow(true);
        }
      }, 300);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Later you can trigger filtering using props
  };

  return (
    <div className="destination-slider-container">
      {showLeftArrow && (
        <button className="arrow left" onClick={() => handleScroll("left")}>
          &#8249;
        </button>
      )}

      <div className="destination-slider" ref={sliderRef}>
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`destination-item ${
              dest.name === "Explore" ? "active" : ""
            }`}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${dest.icon}.png`}
              alt={dest.name}
              className="destination-icon"
            />
            <span className="destination-name">{dest.name}</span>
            {dest.trending && <span className="trending-tag">Trending</span>}
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => handleScroll("right")}>
        &#8250;
      </button>

      <div className="vertical-divider"></div>

      <div className="toggle-button">
        <button
          className={activeTab === "Tours" ? "active" : ""}
          onClick={() => handleTabChange("Tours")}
         id="button-tour">
          Tours 
        </button>
        <button
          className={activeTab === "Activities" ? "active" : ""}
          onClick={() => handleTabChange("Activities")}
        >
          Activities
        </button>
      </div>
    </div>
  );
};

export default DestinationSlider;
