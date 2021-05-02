// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { emailSend } from "../../../services/fetchEmail";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function FormMini() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);

        break;
      case "email":
        setEmail(value);

        break;

      default:
        break;
    }
  };

  const dataSend = (e) => {
    e.preventDefault();
    // emailSend(name, email);
  };
  // onSubmit = { dataSend };

  return (
    <form className="form-home" onSubmit={dataSend}>
      <div className="container-input-form">
        <label className="form-lable" htmlFor="20"></label>
        <input
          className="form-input-name"
          type="text"
          id="20"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Ваше имя"
        />
        <FaUserCircle className="icon-form-user" />
      </div>
      <div className="container-input-form">
        <label htmlFor="email"></label>

        <input
          className="form-input-email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Ваш актуальный e-mail"
        />
        <HiMail className="icon-form-email" />
      </div>
      {/* <PhoneInput
        country={"ua"}
        preferredCountries={["ua", "ru"]}

        // value={this.state.phone}
        // onChange={(phone) => this.setState({ phone })}
      /> */}
      <div className="container-btn-form">
        <button type="submit" className="btn-form-home">
          Пройти БЕСПЛАТНУЮ регистрацию!
        </button>
      </div>
      <div className="form-policy-container">
        <input
          type="checkbox"
          className="policy-checkbox"
          defaultChecked="true"
        />
        <span className="policy-text">
          Я согласен на обработку персональных данных и получение рекламных
          материалов, и я согласен с
          <Link to="/policy" target="_blank" className="policy-link">
            публичной офертой
          </Link>
        </span>
      </div>
    </form>
  );
}
