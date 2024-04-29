import React from "react";
import image5 from "../../../assets/image5.webp";

function Bathroom() {
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
      <div
        className="wardrobes"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 2rem",
        }}
      >
        <h1 style={{ textAlign: "right" }}> Bathroom</h1>
        {svg4}
      </div>
      <div className="wardrobe-inner">
        <div className="dual-images">
          <img src={image5} alt="" />
        </div>
        <div className="wardrobe-text" style={{ textAlign: "right" }}>
          Crafting Timeless Spaces: Where <br /> Vision Meets <br />
          <span style={{ color: "gray" }}>Precision</span>
        </div>
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
}

export default Bathroom;
