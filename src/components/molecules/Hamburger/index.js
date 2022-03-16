import styles from "./hamburger.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Hamburger = ({ children, className }) => {
  const classes = cn(styles.hamburger, className);
  return <div className={classes}>{children}</div>;
};

export default Hamburger;

Hamburger.propTypes = {
  className: PropTypes.string,
};
