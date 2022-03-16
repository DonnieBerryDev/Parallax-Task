import styles from "./cardBlock.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Card from "../../molecules/Card";
import Image1 from "../../../assets/images/payments.png";
import Image2 from "../../../assets/images/promotion.png";
import Image3 from "../../../assets/images/watch.png";

// Imitating data returned from an API call to a CMS
const cards = [
  {
    id: 1,
    header: "Set up & Payments",
    image: Image1,
    copy: "Quickly build your dedicated events page in English & Chinese. Accept payments from all major providers through our safe and reliable checkout.",
    cta: {
      text: "Explore Features",
      link: "#",
    },
  },
  {
    id: 2,
    header: "Progress & Promotion",
    image: Image2,
    copy: "View sales & audience data in real-time. Maximise event reach via Zicket’s Social Media channels, eDM Database and partner network.",
    cta: {
      text: "Explore Features",
      link: "#",
    },
  },
  {
    id: 3,
    header: "Entry & RFID",
    image: Image3,
    copy: "Manage entry through our iOS and Android app. Take your event cashless with our best-in-class solution.",
    cta: {
      text: "Explore Features",
      link: "#",
    },
  },
  {
    id: 4,
    header: "Support & Analysis",
    image: Image1,
    copy: "Omni-channel support for your and your customers. Post event in-sight, analysis and recommendations.",
    cta: {
      text: "Explore Features",
      link: "#",
    },
  },
];

const CardBlock = ({ children, className }) => {
  const classes = cn(styles.cardBlock, className);
  return (
    <div className={classes}>
      <div className="container--main">
        {cards.map(({ id, header, copy, cta, image }, key) => (
          <Card
            counter={id > 10 ? id : "0" + id}
            header={header}
            cta={cta}
            image={image}
            key={key}
          >
            {copy}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardBlock;

CardBlock.propTypes = {
  className: PropTypes.string,
};
