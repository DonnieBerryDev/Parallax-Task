import styles from "./navigation.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Logo from "../../../assets/images/logo.svg";
import { useState } from "react";
import Hamburger from "../Hamburger";

const Navigation = ({ children, className }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const classes = cn(styles.navigation, className);
  return (
    <div className={`${classes} ${hamburgerOpen && "h100"}`}>
      <div className={`container--max ${hamburgerOpen && "h100"}`}>
        <div className={styles.navigation__inner}>
          <div className={styles.logo}>
            <a href="#">
              <img src={Logo} alt="Company Logo" />
            </a>
          </div>
          <nav className={styles.links}>
            <ul>{children}</ul>
          </nav>
          <div className={styles.cta}>
            <Button colour="pink" type="main">
              GET ZICKET
            </Button>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setHamburgerOpen((prev) => !prev)}
          >
            <div></div>
            <div></div>
          </div>
        </div>
        <Hamburger
          links={children}
          isOpen={hamburgerOpen}
          setIsOpen={setHamburgerOpen}
        />
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string,
};
