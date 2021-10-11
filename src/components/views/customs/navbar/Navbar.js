import React from "react";
import logo from "../../../../images/logoo3.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="nav_logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Header"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Timeline"
                spy={false}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Timeline
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Services"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Expirience"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Expirience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ContactMe"
                spy={true}
                smooth={true}
                duration={300}
                className="nav-link"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
