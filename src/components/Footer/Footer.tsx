import "./Footer.css";
import Anchor from "../Anchor/Anchor";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <span className="footer-text">
        Made by{" "}
        <Anchor
          name="Victor Hugo Fernandes"
          href="https://github.com/victorhfernandes"
        />
      </span>
      <Link className="anchor" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="anchor" to="/about">
        About
      </Link>
    </footer>
  );
};
export default Footer;
