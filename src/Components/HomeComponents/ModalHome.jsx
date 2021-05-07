import { useState, useEffect } from "react";

// import FormMini from "../FormMini/FormMini";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import ModalContainer from "../ModalContainer/ModalContainer";

export default function ModalHome() {
  const [classLeave, setClassLeave] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const bodyEl = document.querySelector("body");

  useEffect(() => {
    add();
  }, []);

  const add = () => {
    bodyEl.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("keydown", escClose);
  };

  const escClose = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
    window.removeEventListener("keydown", escClose);
  };

  function onMouseLeave(e) {
    if (e.toElement === null) {
      bodyEl.classList.add("overHiden");
      setClassLeave(true);
    }
  }

  const onClose = () => {
    window.removeEventListener("mouseleave", onMouseLeave);
    bodyEl.classList.remove("overHiden");
    setClassLeave(false);
  };

  const hendleClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

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

  return (
    classLeave && (
      <ModalContainer onClose={hendleClickBackdrop}>
        <div className="box-icon-modal">
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <VscChromeClose className="icon-modal" />
          </button>
        </div>
        <h1 className="heading-modal-home">
          Начните получать от 2500 у.е. в месяц!
        </h1>
        <div className=" modal-home-box ">
          <p className="p-modal-home">
            Пройдите регистрацию и получите бесплатный доступ к программе!
          </p>

          <form className="form-modal" onSubmit={dataSend}>
            <div className="box-input-flex">
              <div className="container-input-modal ">
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
              <div className="container-input-modal ">
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
            </div>

            <div className="box-modal-btn">
              <Link type="submit" className="btn-modal-home" to="/registration">
                <span className="text-btn-modal">Получить доступ</span>
              </Link>
              <div className="form-policy-container">
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
        </div>
      </ModalContainer>
    )
  );
}
