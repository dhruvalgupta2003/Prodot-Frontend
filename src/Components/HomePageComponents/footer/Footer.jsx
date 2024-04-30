import React from "react";
import "./Footer.scss";
import logo from "../../../assets/footer-logo.png";
import { SITEMAP } from "../../../Constants";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
function Footer() {
  const linkStyle = {
    textDecoration: "none",
    linkStyle: "none",
    color: "var(--gray-scale-gray-400, #fcf8f8)",
    listStyleType: "none",
    fontSize: "14px",
  };
  return (
    <div className="footer-container">
      <footer>
        <ul className="con-01">
          <img
            src={logo}
            alt=""
            style={{ borderBottom: "1px solid #FFC94B" }}
          />
          <li
            style={{ width: "100%", color: "#ffff" }}
            className="footer-list-item"
          >
            <span
              style={{ fontSize: "25px", fontWeight: "600", width: "100%" }}
            >
              The ProDot: Designing Tomorrow's Classics Today
            </span>
          </li>
        </ul>
        {SITEMAP.map((item) => {
          return (
            <ul className="con-1">
              <li className="heading-item">{item.title}</li>
              {item.links.map((link) => {
                return (
                  <Link to={`/${link}`} style={linkStyle}>
                    <li className="footer-list-item">{link}</li>
                  </Link>
                );
              })}
            </ul>
          );
        })}
      </footer>
      <div className="socials">
        <FaFacebookSquare color="white" />
        <FaInstagram color="white" />
        <FaLinkedin color="white" />
        <RiTwitterXLine color="white" />
      </div>
      <div className="footer-bottom">
        <li
          className="footer-list-item hidden-item"
          style={{ color: "#0E1B1B" }}
        >
          Privacy Policy Terms & Conditions
        </li>
        <li className="footer-list-item" style={{ textAlign: "center" }}>
          Copyright© {new Date().getFullYear()} THE PRODOT. All Rights Reserved
        </li>
        <li className="footer-list-item">
          <a
            href="https://thetechbeanz.com/"
            style={linkStyle}
            className="footer-list-item"
          >
            Privacy Policy Terms & Conditions
          </a>
        </li>
      </div>
    </div>
  );
}

export default Footer;
