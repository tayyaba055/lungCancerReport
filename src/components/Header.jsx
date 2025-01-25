import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthContext"; // Directly use the hook

const Header = ({ theme, setTheme }) => {
  const { user, logout } = useAuth(); // Use the hook correctly here
  const navigate = useNavigate();
  console.log(user);
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMode();
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
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
              to="/services"
              className="text-lg font-medium hover:text-gray-500 transition"
            >
              Services
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

      {/* User Actions */}
      <div className="ml-10 flex items-center">
        {user ? (
          <div className="relative group">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
            <div className="absolute right-0  w-32 bg-white text-black shadow-lg rounded-md hidden group-hover:block">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-lg font-medium hover:text-gray-500 transition"
          >
            Login
          </Link>
        )}

        {/* Toggle Theme */}
        <img
          onClick={toggleMode}
          onKeyDown={handleKeyPress} // Handles keyboard interaction
          role="button" // Makes it accessible as a button
          tabIndex="0" // Allows keyboard focus
          src={theme === "light" ? "/assets/night.png" : "/assets/day.png"}
          alt="Toggle Theme"
          className="w-12 cursor-pointer ml-6"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
