import styles from "./swiperCard.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const SwiperCard = ({ children, className, id, header, image, title }) => {
  const classes = cn(styles.swiperCard, className);

  return (
    <a href="#" className={styles.hyperlink}>
      <div className={`${classes}`}>
        <div key={id} className={styles.swiperCard}>
          <div className={styles.swiperCard__header}>
            <h4 className="h4--card clr-white">{header}</h4>
          </div>
          <div className={styles.swiperCard__image}>
            <img src={image} alt="" />
          </div>
          <div className={styles.swiperCard__title}>
            <h5 className="h5--card clr-white">{title}</h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SwiperCard;

SwiperCard.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  header: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
