import styles from "./cardBlock.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Card from "../../molecules/Card";

const CardBlock = ({ children, className }) => {
  const classes = cn(styles.cardBlock, className);
  return (
    <div className={classes}>
      <div className="container--main">
        <Card />
      </div>
    </div>
  );
};

export default CardBlock;

CardBlock.propTypes = {
  className: PropTypes.string,
};
