import { Link, Redirect } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

import PhoneInput from "react-phone-input-2";

import ModalContainer from "./ModalContainer/ModalContainer";
import MiniCompany from "./Company/MiniCompanyModal";

import useSendForm from "./hooks/useSendForm";
import useModal from "./hooks/useModal";

import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";

export default function ModalHome({ page, checkOpenModal, headerText }) {
  // console.log(checkOpenModal());
  const { modalOpen, hendleClickBackdrop, onClose } = useModal(checkOpenModal);
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
