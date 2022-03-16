import styles from "./swiper.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import ReactSwiper from "react-id-swiper";
import Image1 from "../../../assets/images/carousel/aia-carnival.jpg";
import Image2 from "../../../assets/images/carousel/summer-fun-carnival.jpg";
import SwiperCard from "../../molecules/SwiperCard";
import "swiper/css/swiper.min.css";
import Button from "../../atoms/Button";
import LeftArrow from "../../../assets/images/icons/swiper-left.svg";
import RightArrow from "../../../assets/images/icons/swiper-right.svg";
import { useState, useRef } from "react";

const Swiper = ({ children, className }) => {
  const classes = cn(styles.swiper, className);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);

  const settings = {
    slidesPerView: "auto",
    spaceBetween: 10,
    slideClass: styles.swiperCard,
  };

  const swiperCards = [
    {
      id: 0,
      header: "Carnival",
      image: Image2,
      title: "AIA Carnival",
    },
    {
      id: 1,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 2,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 3,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 4,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 5,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 6,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 7,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
    {
      id: 8,
      header: "Carnival",
      image: Image1,
      title: "AIA Carnival",
    },
  ];

  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <>
      <div className={styles.swiper__buttons}>
        <div className="container--main">
          <div className={styles.buttons}>
            <div
              className={`${styles.buttons__left} `}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <Button type="circle">
                <img src={LeftArrow} className="" alt="" />
              </Button>
            </div>
            <div
              className={`${styles.buttons__right}`}
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <Button type="circle">
                <img src={RightArrow} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes}>
        <div className="container--left">
          <div className={styles.cards}>
            <ReactSwiper {...settings} getSwiper={setSwiper} ref={swiperRef}>
              {swiperCards.map(({ id, header, image, title }) => (
                <div className={`${styles.card} swiper--card`} key={id}>
                  <SwiperCard
                    key={id}
                    header={header}
                    image={image}
                    title={title}
                  />
                </div>
              ))}
            </ReactSwiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiper;

Swiper.propTypes = {
  className: PropTypes.string,
};
