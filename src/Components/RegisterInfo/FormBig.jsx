import { useState } from "react";
import { useLocation } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { emailSend } from "../../services/fetchEmail";

import PhoneInput from "react-phone-input-2";

import Form from "../Form/Form";

// import useSendDataForm from "../hooks/useSendDataForm";

export default function FormBig({
  classArrow,
  newClassContainerForInput,
  nameValue,
  emailValue,
  page,
}) {
  const [lastNameValue, setLastNameValue] = useState("");
  const [valueNumber, setValueNumber] = useState("");

  // const { name, email } = useLocation();

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "lastName":
        setLastNameValue(value);

        break;

      default:
        break;
    }
  };

  const onChangeTwo = (e) => {
    setValueNumber(e);
  };

  // const onSubmit = (e) => {
  //   // e.preventDefault();
  //   if (!name || !email || !lastNameValue || !valueNumber) {
  //     console.log("Отбой");
  //     return;
  //   }
  //   return emailSend(name, email, lastNameValue, valueNumber);
  // };

  return (
    <Form
      text={
        <h1 className="step-one-h">
          <span className="step-one-text">1 ШАГ:</span> Регистрация нового
          пользователя «Общего дела».
        </h1>
      }
      newClassContainer={"box-input-flex-reg"}
      newClassInput={"container-input-form-reg"}
      newInput={
        <div className="small-container">
          <div className="container-input-form-reg">
            <label htmlFor="lastName"></label>

            <input
              className="form-input-email"
              type="text"
              id="lastName"
              name="lastName"
              autocomplete="off"
              value={lastNameValue}
              onChange={onChange}
              placeholder="Фамилия"
            />
            <FaUserCircle className="icon-form-user" />
          </div>
          <div className="container-input-form-reg">
            <PhoneInput
              country={"ua"}
              preferredCountries={["ua", "ru"]}
              name="num"
              value={valueNumber}
              onChange={onChangeTwo}
            />
          </div>
        </div>
      }
      page="/thanks"
      addClassBtn="btn-big-form"
      btnText="Хочу доступ к «Общему делу»"
      additionalContainerBtn="additional-container-btn"
      additionalContainerPolicy="additional-container-policy"
      classArrow={classArrow}
      newClassContainerForInput={newClassContainerForInput}
      nameValue={nameValue}
      emailValue={emailValue}
      lastNameValue={lastNameValue}
      valueNumber={valueNumber}
      // onSubmit={onSubmit}
    />
  );
}
