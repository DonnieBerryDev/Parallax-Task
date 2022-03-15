import styles from "./hero.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../../atoms/Button";
import Navigation from "../../molecules/Navigation";
import Video from "../../atoms/Video";
import Thumbnail from "../../../assets/images/thumbnail.png";

const Hero = ({ children, className }) => {
  const classes = cn(styles.hero, className);

  // Simulating a pretend API call from a CMS for the header links
  const links = [
    {
      id: 1,
      text: "About",
      link: "#about",
    },
    {
      id: 2,
      text: "Features",
      link: "#features",
    },
    {
      id: 3,
      text: "Clients",
      link: "#clients",
    },
    {
      id: 4,
      text: "News",
      link: "#news",
    },
    {
      id: 5,
      text: "FAQs",
      link: "#faqs",
    },
  ];

  return (
    <div className={classes}>
      <div className={styles.hero__banner}>
        <span>Looking to buy tickets to an event?</span>
        <a href="#" className="link--main">
          Get them here
        </a>
      </div>
      <Navigation>
        {links.map(({ id, text, link }) => (
          <a href={link}>
            <li key={id}>{text}</li>
          </a>
        ))}
      </Navigation>
      <div className={styles.hero__wrapper}>
        <div className="container--main h100">
          <div className={styles.hero__content}>
            <div className={styles.hero__title}>
              <h1 className="h1--main type--outline clr-white">
                Make your event a success
              </h1>
            </div>
            <div className={styles.hero__sub}>
              <p className="p--sub clr-white">
                Zicket handles all the hassle of selling tickets for every type
                of event.
              </p>
            </div>

            <div className={styles.hero__cta}>
              <Button colour="pink" link="#" outline>
                Get Started
              </Button>
            </div>
            <div className={styles.hero__bottomContent}>
              <span>
                Over <span className="bold">3,000,000</span> Tickets Sold at
                some of Asia's Top Events Last Year
              </span>
            </div>
          </div>
          <div className={styles.hero__video}>
            <Video
              url="https://www.youtube.com/embed/eXqi9oJ6qiQ"
              thumbnail={Thumbnail}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  className: PropTypes.string,
};
