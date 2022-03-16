import styles from "./contact.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Contact = ({ children, className }) => {
  const classes = cn(styles.contact, className);
  return (
    <div className={classes}>
      <div className={styles.contact__inner}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h5 class="h3--main clr-white">Stay up to date</h5>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  className: PropTypes.string,
};
