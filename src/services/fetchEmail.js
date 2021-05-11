import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export function emailSend(name, email, lastNameValue, valueNumber) {
  axios
    .post("https://formsubmit.co/ajax/usersnamers@gmail.com", {
      name,
      email,
      lastNameValue,
      valueNumber,
    })
    .then((response) => response)
    .catch((err) => {
      throw Error(err);
    });
}

//
