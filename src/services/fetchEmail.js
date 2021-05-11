import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

export function emailSend(name, email, lastNameValue, valueNumber) {
  axios
    .post("https://formsubmit.co/ajax/makcimys001@gmail.com", {
      name,
      email,
      lastNameValue,
      valueNumber,
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

//usersnamers@gmail.com
