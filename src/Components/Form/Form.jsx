// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link, Redirect } from "react-router-dom";
import ButtonRedirect from "../ButtonRedirect";
import Arrows from "../Arrows";
// import useSendDataForm from "../hooks/useSendDataForm";

export default function FormMini({
  text,
  newClassContainer,
  newClassContainerForInput,
  newClassInput,
  newInput,
  page,
  additionalContainerBtn,
  addClassBtn,
  btnText,
  additionalContainerPolicy,
  classArrow,
  nameValue,
  emailValue,
  lastNameValue,
  valueNumber,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const stateInput = useSendDataForm(name, email);

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

  // const dataSend = (e) => {
  //   e.preventDefault();
  // };
  // console.log(onSubmit);

  return (
    <div>
      {text}
      <form className="form-home">
        <div
          className={newClassContainer ? newClassContainer : "box-input-flex"}
        >
          <div
            className={
              newClassContainerForInput
                ? newClassContainerForInput
                : "box-input-flex"
            }
          >
            <div
              className={newClassInput ? newClassInput : "container-input-form"}
            >
              <label className="form-lable" htmlFor="20"></label>
              <input
                className="form-input-name"
                type="text"
                id="20"
                name="name"
                autocomplete="off"
                value={nameValue ? nameValue : name}
                onChange={onChange}
                placeholder="Ваше имя"
              />
              <FaUserCircle className="icon-form-user" />
            </div>
            <div
              className={newClassInput ? newClassInput : "container-input-form"}
            >
              <label htmlFor="email"></label>

              <input
                className="form-input-email"
                type="email"
                id="email"
                name="email"
                autocomplete="off"
                value={emailValue ? emailValue : email}
                onChange={onChange}
                placeholder="Ваш актуальный e-mail"
              />
              <HiMail className="icon-form-email" />
            </div>
          </div>
          {newInput}
        </div>

        <div className="container-btn-form">
          <div className={additionalContainerBtn ? additionalContainerBtn : ""}>
            <Arrows classArrow={classArrow}>
              {/* <div> */}
              <ButtonRedirect
                addClassBtn={addClassBtn}
                // onClick={onClick}
                redirect={page}
                valueNameBtn={nameValue ? nameValue : name}
                valueEmailBtn={emailValue ? emailValue : email}
                lastNameValue={lastNameValue}
                valueNumber={valueNumber}
              >
                {btnText}
              </ButtonRedirect>
              {/* </div> */}
            </Arrows>
          </div>

          <div
            className={
              additionalContainerPolicy
                ? additionalContainerPolicy
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
