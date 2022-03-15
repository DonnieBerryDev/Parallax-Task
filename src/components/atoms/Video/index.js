import styles from "./video.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Video = ({ children, className, url, thumbnail }) => {
  const classes = cn(styles.video, className);
  // create a component that will be used to display the video in a modal
  const [showVideo, setShowVideo] = useState(false);
  const handleClick = () => {
    setShowVideo(true);
  };
  const handleClose = () => {
    setShowVideo(false);
  };

  // listen for user pressing escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowVideo(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // if the user clicks outside of the modal, close it again

  return (
    <>
      <div className={classes}>
        <div className={styles.video__thumbnail}>
          {!showVideo && (
            <img src={thumbnail} onClick={handleClick} alt="Video Thumbnail" />
          )}
        </div>
      </div>
      {showVideo && (
        <div className={styles.video__modal}>
          <div className={styles.video__modal__inner}>
            <button onClick={handleClose}>
              <span>Close</span>
            </button>
            <iframe
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              height="100%;"
              width="100%;"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;

Video.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
};
