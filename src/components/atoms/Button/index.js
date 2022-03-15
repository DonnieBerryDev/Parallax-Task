import styles from "./button.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, className, link, colour, outline }) => {
  const classes = cn(
    styles.button,
    styles[colour],
    className,
    outline && `${styles[`outline--${colour}`]}`
  );
  return (
    <>
      {link !== null ? (
        <a href={link} className={classes}>
          {children}
        </a>
      ) : (
        <button className={classes}>{children}</button>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  colour: PropTypes.string,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  link: null,
  color: PropTypes.oneOf(["pink", "blue", "tertiary"]),
  outline: false,
};
