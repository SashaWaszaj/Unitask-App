import React from "react";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Información básica */}
        <div className="footer-about">
          <h2>UniTask</h2>
          <p> The ideal tool for college students looking to organize their time and achieve their academic goals.</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <h3>Fallow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UniTask. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
