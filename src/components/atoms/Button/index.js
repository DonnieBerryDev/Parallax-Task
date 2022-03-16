import styles from "./button.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({
  children,
  className,
  link,
  colour,
  outline,
  type,
  submitForm,
}) => {
  const classes = cn(
    styles[type],
    styles[colour],
    className,
    outline && `${styles.outline}`
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

      {submitForm && <input type="submit" className={classes} />}
    </>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  colour: PropTypes.string,
  outline: PropTypes.bool,
  submitForm: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  link: null,
  color: PropTypes.oneOf(["pink", "blue", "tertiary"]),
  outline: false,
};
