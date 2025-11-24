import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faFacebook,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-social">
        <li>
          <FontAwesomeIcon id="instagram" icon={faSquareInstagram} />
        </li>
        <li>
          <FontAwesomeIcon id="facebook" icon={faFacebook} />
        </li>
        <li>
          <FontAwesomeIcon id="twitter" icon={faSquareXTwitter} />
        </li>
      </ul>

      <ul className="footer-links">
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/volunteer">Volunteer</NavLink>
        </li>
      </ul>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Furever Friends Rescue
      </p>
    </footer>
  );
}
