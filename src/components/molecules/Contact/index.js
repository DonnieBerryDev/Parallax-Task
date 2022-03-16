import styles from "./contact.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { submitNewsletter } from "../../../api/submitNewsletter";
import { useEffect, useState } from "react";
import { emailRegex } from "../../../helpers/regex";

const Contact = ({ children, className }) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const classes = cn(styles.contact, className);

  const handleFormSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    const email = e.target[0].value;

    const response = await submitNewsletter(email);

    if (response?.errors?.length > 0) {
      setError(true);
      setMessage(response.errors[0].msg);
    }

    if (emailRegex.test(email)) {
      const response = await submitNewsletter(email);
      if (!response?.success) {
        setError(true);
        setMessage(response.errors[0].email);
        return;
      }
      setMessage("Thank you for subscribing!");
    } else {
      setError(true);
      setMessage("Please enter a valid email address.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setError(false);
    }, 7000);
  }, [message]);

  return (
    <div className={classes}>
      <div className="container--main">
        <div className={styles.contact__inner}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h5 className="h3--main clr-white">Stay up to date</h5>
            </div>
            <div className={styles.subText}>
              <p className="p--alt clr-white">
                Receive our latest news, announcements and offers.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <form onSubmit={handleFormSubmit} id="newsletter">
              <div className={styles.email}>
                <Input
                  type="text"
                  name="email"
                  placeholder="jane.smith@example.com"
                  style="main"
                  required
                />
                <div
                  className={`${styles.message} ${
                    message !== "" && styles.visable
                  }`}
                >
                  <span
                    className={`${styles.baseMessage} ${
                      error && styles.error
                    } ${!error && message !== "" && styles.success}`}
                  >
                    {message}
                  </span>
                </div>
              </div>
              <div className={styles.submit}>
                <Input
                  type="submit"
                  colour="blue"
                  outline
                  onClick={handleFormSubmit}
                  value={`SUBMIT`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  className: PropTypes.string,
};
