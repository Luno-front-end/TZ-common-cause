import { Link, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import PhoneInput from "react-phone-input-2";

import ButtonRedirect from "./ButtonRedirect";
import Arrows from "./Arrows";

import useSendForm from "./hooks/useSendForm";

import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";

export default function FormMini({
  page,
  btnText,
  classArrow,
  stateModalOpen,
}) {
  const {
    link,
    name,
    email,
    lastName,
    number,
    history,
    pathname,
    onChange,
    onChangeNumber,
    onSubmit,
  } = useSendForm(page);

  return (
    <div>
      {!stateModalOpen && <ToastContainer />}
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
