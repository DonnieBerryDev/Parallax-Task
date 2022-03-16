import styles from "./card.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";

const Card = ({ children, className, header, cta, image, counter }) => {
  const classes = cn(styles.card, className);
  return (
    <div className={classes}>
      <div className={styles.card__inner}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.content__header}>
            <h3 className="h3--main clr-blue--dark">{header}</h3>
            <div className={styles.counter}>
              <span className="span--counter">{counter}</span>
            </div>
          </div>
          <div className={styles.content__copy}>
            <p className="p--main clr-blue--light">{children}</p>
          </div>
          <div className={styles.content__cta}>
            <Button type="subtle">Explore features</Button>
          </div>
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
  image: PropTypes.any,
  counter: PropTypes.any,
};
