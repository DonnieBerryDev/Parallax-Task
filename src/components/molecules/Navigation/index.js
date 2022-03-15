import styles from "./navigation.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Logo from "../../../assets/images/logo.svg";

const Navigation = ({ children, className }) => {
  const classes = cn(styles.navigation, className);
  return (
    <div className={classes}>
      <div className="container--max">
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
            <Button colour="pink">GET ZICKET</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string,
};
