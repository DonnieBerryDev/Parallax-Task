import styles from "./input.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import buttonStyles from "../Button/button.module.scss";

const Input = ({
  children,
  className,
  type,
  style,
  placeholder,
  required,
  colour,
  value,
  name,
}) => {
  const classes = cn(
    `${styles[`${type}--${style}`]} ${styles.input} ${className}`
  );
  return (
    <>
      {(type === "text" || type === "email") && (
        <input
          type={type}
          className={classes}
          placeholder={placeholder}
          required={required}
          name={name}
        />
      )}

      {type === "submit" && (
        <input
          type="submit"
          value={value ? value : "Submit"}
          className={cn(
            buttonStyles.input,
            buttonStyles.main,
            buttonStyles.outline,
            buttonStyles[`${colour}`]
          )}
        />
      )}
    </>
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  colour: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};
