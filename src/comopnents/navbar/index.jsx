import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../../context/scrollContext"; // Import useScroll

const Navbar = ({ openModal, homeIcon }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollToSection } = useScroll(); // Use the scroll function

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-0 w-full py-4 px-6 flex justify-between items-center bg-slate-900">
      <div className="text-2xl font-bold text-white">Interneex</div>

      <div className="navbar-items hidden lg:block flex space-x-6">
        {homeIcon ? (
          <Link to="/" className="text-white text-xl font-bold">
            Home
          </Link>
        ) : (
          <>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-400"
              onClick={() => scrollToSection("services")}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-400"
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-gray-400"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
           
          </>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="#talk"
          className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            openModal();
            scrollToSection("talk");
          }}
        >
          Talk to Us
        </a>
      </div>

      {!homeIcon && (
        <>
          <div
            className={`hamburger lg:hidden ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <a
              href="#about"
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("about");
                toggleMenu();
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("services");
                toggleMenu();
              }}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("pricing");
              }}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-gray-400"
              onClick={() => {
                scrollToSection("testimonials");
              }}
            >
              Testimonials
            </a>
            <Link to="/batches-and-webinar"
             className="hover:text-gray-400"
            >Batches and Webinar</Link>
            <a
              href="#talk"
              className="cta-button bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                openModal();
                scrollToSection("talk");
                toggleMenu();
              }}
            >
              Talk to Us
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
