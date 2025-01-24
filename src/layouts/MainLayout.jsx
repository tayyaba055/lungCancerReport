import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="main-layout w-full">
      <Header theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
