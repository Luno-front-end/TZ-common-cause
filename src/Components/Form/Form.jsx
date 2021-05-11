import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import ButtonRedirect from "../ButtonRedirect";
import Arrows from "../Arrows";
import { emailSend } from "../../services/fetchEmail";

export default function FormMini({
  page,
  btnText,
  classArrow,
  checkOpenModal,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState(null);

  const history = useHistory();
  const { pathname, nameProp, emailProp } = useLocation();

  // console.log(checkOpenModal);

  useEffect(() => {
    if (nameProp) {
      setName(nameProp);
    }
    if (emailProp) {
      setEmail(emailProp);
    }

    return () => clearValue();
  }, [emailProp, nameProp]);

  // const notify = (message) => toast(message);

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
    <div>
      {!checkOpenModal && <ToastContainer />}
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
      {pathname === "/registration" && (
        <h1 className="step-one-h">
          <span className="step-one-text">1 ШАГ:</span> Регистрация нового
          пользователя «Общего дела».
        </h1>
      )}
      <form className="form-home" onSubmit={onSubmit}>
        <div
          className={
            pathname === "/registration"
              ? "box-input-flex-reg"
              : "box-input-flex"
          }
        >
          <div
            className={
              pathname === "/registration"
                ? "small-container"
                : "box-input-flex"
            }
          >
            <div
              className={
                pathname === "/registration"
                  ? "container-input-form-reg"
                  : "container-input-form"
              }
            >
              <label className="form-lable" htmlFor="20"></label>
              <input
                className="form-input-name"
                type="text"
                id="20"
                name="name"
                autoComplete="off"
                value={name}
                onChange={onChange}
                placeholder="Ваше имя"
              />
              <FaUserCircle className="icon-form-user" />
            </div>
            <div
              className={
                pathname === "/registration"
                  ? "container-input-form-reg"
                  : "container-input-form"
              }
            >
              <label htmlFor="email"></label>

              <input
                className="form-input-email"
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={onChange}
                placeholder="Ваш актуальный e-mail"
              />
              <HiMail className="icon-form-email" />
            </div>
          </div>
          {pathname === "/registration" && (
            <div className="small-container">
              <div className="container-input-form-reg">
                <label htmlFor="lastName"></label>

                <input
                  className="form-input-email"
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
              <div className="container-input-form-reg">
                <PhoneInput
                  country={"ua"}
                  preferredCountries={["ua", "ru"]}
                  value={number}
                  autoComplete="off"
                  onChange={onChangeNumber}
                />
              </div>
            </div>
          )}
        </div>

        <div className="container-btn-form">
          <div
            className={
              pathname === "/registration" ? "additional-container-btn" : ""
            }
          >
            <Arrows classArrow={classArrow}>
              <div className={pathname === "/registration" ? "btn" : ""}>
                <ButtonRedirect
                  addClassBtn={
                    pathname === "/registration" ? "btn-big-form" : ""
                  }
                >
                  {btnText}
                </ButtonRedirect>
              </div>
            </Arrows>
          </div>

          <div
            className={
              pathname === "/registration"
                ? "additional-container-policy"
                : "form-policy-container"
            }
          >
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
        </div>
      </form>
    </div>
  );
}
