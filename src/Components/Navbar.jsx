import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gifLogo from "./robotgif/fdao.jpg";
import staticLogo from "./robotgif/fdao.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("");

  const navLinks = ["Home", "About Us"];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();

  // State for tracking if the logo is hovered
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // Event handlers for logo hover
  const handleLogoHoverEnter = () => setIsLogoHovered(true);
  const handleLogoHoverLeave = () => setIsLogoHovered(false);

  // Update selectedNavItem when location changes
  React.useEffect(() => {
    const path = location.pathname;
    const navItem = path.substring(1).replace(/[\s-]+/g, "").toLowerCase();
    setSelectedNavItem(navItem);
  }, [location.pathname]);

  return (
    <nav className="sticky bg-black backdrop-blur-md top-0 z-[999] py-4 flex justify-between items-center">
      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={handleLogoHoverEnter}
        onMouseLeave={handleLogoHoverLeave}
      >
        <img
          src={isLogoHovered ? gifLogo : staticLogo} // Use gifLogo if hovered, otherwise use staticLogo
          alt="Logo"
          className="w-14 h-14" // Set standard logo dimensions
        />
       <span className="text-xl ml-2" style={{ color: '#D9811E' }}>Freelancers DAO</span>
      </div>

      {/* Navbar Links */}
      <ul className="hidden md:flex md:items-center md:space-x-4 md:flex-grow md:justify-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={`/${link.replace(/[\s-]+/g, "").toLowerCase()}`}
              className={selectedNavItem === link.replace(/[\s-]+/g, "").toLowerCase() ? 'text-orange-500' : 'text-white'}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white p-4 flex flex-col space-y-4">
          {navLinks.map((link, index) => (
           <Link
             key={index}
             to={`/${link.replace(/[\s-]+/g, "").toLowerCase()}`}
             className={selectedNavItem === link.replace(/[\s-]+/g, "").toLowerCase() ? 'text-orange-500' : 'text-white'}
           >
             {link}
           </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
