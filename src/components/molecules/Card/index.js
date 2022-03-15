import styles from "./card.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Image1 from "../../../assets/images/payments.png";

const Card = ({ children, className, header, cta, image }) => {
  const classes = cn(styles.card, className);
  return (
    <div className={classes}>
      <div className={styles.card__inner}>
        <div className={styles.image}>{/* <img src={Image1} alt="" /> */}</div>
        <div className={styles.content}>
          <div className={styles.content__header}>
            <h3 className="h3--main clr-blue--dark">Set up & Payments</h3>
          </div>
          <div className={styles.content__copy}>
            <p className="p--main clr-blue--light">
              Quickly build your dedicated events page in English & Chinese.
              Accept payments from all major providers through our safe and
              reliable checkout.
            </p>
          </div>
          <div className={styles.content__cta}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  cta: PropTypes.object,
  image: PropTypes.object,
};
