import styles from "./hamburger.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Hamburger = ({ links, isOpen }) => {
  const classes = cn(styles.hamburger);
  return (
    <div className={classes}>
      <div className={styles.hamburger__inner}>
        {isOpen && (
          <div className={styles.links}>
            <ul>{links}</ul>
          </div>
        )}
        <div className={styles.hamburger__icon}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  links: PropTypes.array,
  isOpen: PropTypes.bool,
};
