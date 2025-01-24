import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import unitaskLogo from '../assets/unitaskLogo.PNG';
import '../styles/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bar">
      <div className="logo-div">
        <img className="unitask-logo" src={unitaskLogo} alt="Unitask Logo" />
      </div>
      <div className="nav-links">
        <ul className="list">
          <li className="link-list"><Link to="/">Home</Link></li>
          <li className="link-list"><Link to="/subject">Schedule</Link></li>
          <li className="link-list"><Link to="/project">Projects</Link></li>
          <li className="link-list"><Link to="/exam">Exams</Link></li>
          <li className="link-list"><Link to="/course">Courses</Link></li>
          <li className="link-list"><Link to="/grade">Grades</Link></li>
          
        </ul>
      </div>
      <div className="signup-login-box">
        <ul className="auth-buttons">
          <li>
            <button
              onClick={() => navigate(`/login`)}
              className="button-login" role="button">
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate(`/register`)}
              className="button-signup" role="button">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
