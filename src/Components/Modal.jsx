import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import ModalContainer from "./ModalContainer/ModalContainer";
import MiniCompany from "./Company/MiniCompany";
import { emailSend } from "../services/fetchEmail";

export default function ModalHome({ page, checkOpenModal, headerText }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState(null);

  const bodyEl = document.querySelector("body");
  const history = useHistory();
  const { pathname, nameProp, emailProp } = useLocation();

  useEffect(() => {
    add();
    return () => onClose();
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
    if (e.target.tagName === "BODY") {
      bodyEl.classList.add("overHiden");
      checkOpenModal(true);
      setModalOpen(true);
    }
  }

  const onClose = () => {
    bodyEl.removeEventListener("mouseleave", onMouseLeave);
    bodyEl.classList.remove("overHiden");
    checkOpenModal(false);
    setModalOpen(false);
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
    emailSend(
      nameProp ? nameProp : name,
      emailProp ? emailProp : email,
      lastName,
      number
    );
  };

  return (
    modalOpen && (
      <>
        <ModalContainer onClose={hendleClickBackdrop}>
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
          <div className="box-icon-modal">
            <button type="button" className="btn-close-modal" onClick={onClose}>
              <VscChromeClose className="icon-modal" />
            </button>
          </div>
          <h1 className="heading-modal-home">{headerText}</h1>
          <div className=" modal-home-box ">
            {pathname === "/registration" && (
              <h2 className="heading-modal-reg">
                Получите мгновенный доступ к программе «Общее дело». <br /> Ваша
                прибыль составит <span>€15 004 071</span>
              </h2>
            )}

            <p className="p-modal-home">
              {pathname === "/"
                ? "Пройдите регистрацию и получите бесплатный доступ к программе!"
                : "СОЗДАЙТЕ АККАУНТ В «ОБЩЕМ ДЕЛЕ» ПРЯМО СЕЙЧАС"}
            </p>

            <form className="form-modal" onSubmit={onSubmit}>
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
                {pathname === "/registration" && (
                  <>
                    <div className="container-input-modal ">
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
                    <div className="container-input-modal ">
                      <PhoneInput
                        country={"ua"}
                        preferredCountries={["ua", "ru"]}
                        value={number}
                        onChange={onChangeNumber}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="box-modal-btn">
                <button type="submit" className="btn-modal-home">
                  <span className="text-btn-modal">Получить доступ</span>
                </button>
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
            <MiniCompany />
          </div>
        </ModalContainer>
      </>
    )
  );
}
