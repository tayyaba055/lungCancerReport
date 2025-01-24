import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMode();
    }
  };

  return (
    <div
      className={`w-full flex items-center justify-between ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } transition-all duration-500 px-8 py-4`}
    >
      {/* Logo */}
      <img
        src={
          theme === "light"
            ? "/assets/logo-black.png"
            : "/assets/logo-white.png"
        }
        alt="Logo"
        className="w-40 cursor-pointer"
      />

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-center list-none">
          <li>
            <Link
              to="/"
              className="text-lg font-medium hover:text-gray-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="text-lg font-medium hover:text-gray-500 transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-lg font-medium hover:text-gray-500 transition"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-gray-500 transition"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Toggle Theme */}
      <img
        onClick={toggleMode}
        onKeyDown={handleKeyPress} // Handles keyboard interaction
        role="button" // Makes it accessible as a button
        tabIndex="0" // Allows keyboard focus
        src={theme === "light" ? "/assets/night.png" : "/assets/day.png"}
        alt="Toggle Theme"
        className="w-12 cursor-pointer ml-10"
      />
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
