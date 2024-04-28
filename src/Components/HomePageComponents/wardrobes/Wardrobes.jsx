import React from "react";
import image4 from "../../../assets/image4.webp";

function Wardrobes() {
  const svg4 = (
    <svg
      width="305"
      height="3"
      viewBox="0 0 305 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="305" height="3" fill="#0E1B1B" />
    </svg>
  );
  return (
    <div className="wardrobes-container">
      <div className="wardrobes">
        {svg4}
        <h1> Wardrobes</h1>
      </div>
      <div className="wardrobe-inner">
        <div className="wardrobe-text">
          Style Meets Function: Elevate Your Space like a <br />
          <span style={{ color: "gray" }}>PRO!</span>
        </div>
        <div className="dual-images">
          <img src={image4} alt="" />
        </div>
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
}

export default Wardrobes;
