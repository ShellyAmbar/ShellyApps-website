import React from "react";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
      </button>
      <div
        className="collapse navbar-collapse navbar"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto">
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
              to="Technologies"
              spy={true}
              smooth={true}
              duration={300}
              className="nav-link"
            >
              Technologies
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
    </nav>
  );
};
