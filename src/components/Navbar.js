import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FiMoon, FiSun } from "react-icons/fi";
import profile from "../Assets/profile.png";

function ThemeToggle({ isDark, onToggleTheme, className = "" }) {
  return (
    <button
      type="button"
      className={`theme-toggle${isDark ? " is-dark" : " is-light"}${className ? ` ${className}` : ""}`}
      onClick={onToggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={!isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon theme-toggle-sun">
        <FiSun />
      </span>
      <span className="theme-toggle-icon theme-toggle-moon">
        <FiMoon />
      </span>
      <span className="theme-toggle-thumb" aria-hidden="true" />
    </button>
  );
}

function NavBar({ theme, onToggleTheme }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={`navbar-shell${navColour ? " sticky" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <span className="brand-mark">
            <img src={profile} alt="Dixon Frederick" />
          </span>
          <span className="brand-copy">
            <strong>Dixon Frederick</strong>
            <span>Software Engineer</span>
          </span>
        </Navbar.Brand>

        <div className="navbar-mobile-controls">
          <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(!expand);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                end
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-cta-item nav-theme-desktop">
              <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
            </Nav.Item>

            <Nav.Item className="nav-cta-item">
              <Nav.Link
                href="https://github.com/dixonfrederick"
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
                onClick={() => updateExpanded(false)}
              >
                <BsGithub style={{ marginBottom: "2px" }} /> GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
