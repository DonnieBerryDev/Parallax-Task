import styles from "./example.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Example = ({ children, className }) => {
  const classes = cn(styles.example, className);
  return <div className={classes}>{children}</div>;
};

export default Example;

Example.propTypes = {
  className: PropTypes.string,
};
