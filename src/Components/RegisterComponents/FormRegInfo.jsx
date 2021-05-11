import { Link, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";

import useSendForm from "../hooks/useSendForm";

export default function FormRegInfo({ page, stateModalOpen }) {
  const {
    link,
    name,
    email,
    lastName,
    number,
    history,
    onChange,
    onChangeNumber,
    onSubmit,
  } = useSendForm(page);

  return (
    <>
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
