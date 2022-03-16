import axios from "axios";

// make an api call to https://frontend-trial-api.qa.parallax.dev/api/newsletter to submit the newsletter

export const submitNewsletter = async (email) => {
  return axios
    .post("https://frontend-trial-api.qa.parallax.dev/api/newsletter", {
      email,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
};
