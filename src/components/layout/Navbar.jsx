import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <NavLink to="/" end aria-label="Go to Home" onClick={closeMenu}>
        <img
          src={logo}
          id="navLogo"
          height="60"
          alt="Furever Friends Rescue logo: cat and dog"
        />
      </NavLink>

      {/* Mobile toggle button */}
      <button
        className="navToggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="navToggleBar" />
        <span className="navToggleBar" />
        <span className="navToggleBar" />
      </button>

      <ul
        id="primary-navigation"
        className={`navbarList ${isOpen ? "isOpen" : ""}`}
      >
        <li>
          <NavLink className="navListItem" to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to="/animals" onClick={closeMenu}>
            Animals
          </NavLink>
        </li>
        <li>
          <NavLink className="navListItem" to="/stories" onClick={closeMenu}>
            Stories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
