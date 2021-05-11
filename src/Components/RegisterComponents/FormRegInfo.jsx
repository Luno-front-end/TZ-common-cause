import { useEffect, useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

import { emailSend } from "../../services/fetchEmail";

export default function FormRegInfo({ page }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState(null);

  const history = useHistory();
  const { pathname, nameProp, emailProp } = useLocation();

  useEffect(() => {
    if (nameProp) {
      setName(nameProp);
    }
    if (emailProp) {
      setEmail(emailProp);
    }

    return () => clearValue();
  }, [emailProp, nameProp]);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);

        break;
      case "email":
        setEmail(value);

        break;
      case "lastName":
        setLastName(value);

        break;
      default:
        break;
    }
  };
  const onChangeNumber = (e) => {
    setNumber(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      if (name === "") {
        toast.error("Ви не ввели имя", { position: "top-center" });
        return;
      }
      if (email === "") {
        toast.error("Ви не ввели почту", { position: "top-center" });
        return;
      }
    }

    setLink("/registration");

    if (pathname !== "/registration") {
      return;
    }

    setLink("");

    if (name === "") {
      toast.error("Ви не ввели имя", { position: "top-center" });
      return;
    }
    if (email === "") {
      toast.error("Ви не ввели почту", { position: "top-center" });
      return;
    }

    if (lastName === "") {
      toast.error("Ви не ввели фамилию", { position: "top-center" });
      return;
    }
    if (number === "") {
      toast.error("Ви не ввели номер", { position: "top-center" });
      return;
    }
    setLink(page);
    emailSend(name, email, lastName, number);
  };

  const clearValue = () => {
    setName("");
    setEmail("");
    setLastName("");
    setNumber("");
    setLink(null);
  };

  return (
    <>
      <ToastContainer />
      {link && (
        <Redirect
          to={{
            pathname: `${page}`,
            nameProp: name,
            emailProp: email,
            state: { referrer: history.location.pathname },
          }}
        />
      )}

      {/* <h1 className="heading-modal-home">{headerText}</h1> */}

      <div className=" form-reg-info-box">
        <h2 className="heading-reg-info">
          1 ШАГ: Создайте учётную запись в «Общем деле».
        </h2>

        <form className="form-modal" onSubmit={onSubmit}>
          <div className="box-input-flex">
            <div className="container-input-modal ">
              <label className="form-lable" htmlFor="20"></label>
              <input
                className="form-input-reg-name"
                type="text"
                id="20"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Ваше имя"
                autoComplete="off"
              />
              <FaUserCircle className="icon-form-user" />
            </div>

            <div className="container-input-modal ">
              <label htmlFor="lastName"></label>

              <input
                className="form-input-reg-email"
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="off"
                value={lastName}
                onChange={onChange}
                placeholder="Фамилия"
              />
              <FaUserCircle className="icon-form-user" />
            </div>
            <div className="container-input-modal ">
              <label htmlFor="email"></label>

              <input
                className="form-input-reg-email"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="E-mail"
                autoComplete="off"
              />
              <HiMail className="icon-form-email" />
            </div>
            <div className="container-input-modal ">
              <PhoneInput
                country={"ua"}
                preferredCountries={["ua", "ru"]}
                value={number}
                onChange={onChangeNumber}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="box-modal-btn">
            <button type="submit" className="btn-form-reg-info">
              Получить доступ к программе «Общее дело»
            </button>
            <div className="formRegInfo-policy-container">
              <input
                type="checkbox"
                className="policy-checkbox"
                defaultChecked="true"
              />
              <span className="policy-text">
                Я согласен на обработку персональных данных и получение
                рекламных материалов, и я согласен с
                <Link to="/policy" target="_blank" className="policy-link">
                  публичной офертой
                </Link>
              </span>
            </div>
          </div>
        </form>
        <h3 className="reg-start-work">
          Зарегистрируйтесь,
          <br /> чтобы начать зарабатывать уже сейчас!
        </h3>
      </div>
    </>
  );
}
