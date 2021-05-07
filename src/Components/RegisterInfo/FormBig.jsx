import { useState } from "react";

import { FaUserCircle } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import PhoneInput from "react-phone-input-2";

import Form from "../Form/Form";
import useSendDataForm from "../hooks/useSendDataForm";

export default function FormBig({ classArrow, newClassContainerForInput }) {
  const stateInputValue = useSendDataForm();

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
            <label htmlFor="email"></label>

            <input
              className="form-input-email"
              type="email"
              id="email"
              name="email"
              // value={email}
              // onChange={onChange}
              placeholder="Фамилия"
            />
            <FaUserCircle className="icon-form-user" />
          </div>
          <div className="container-input-form-reg">
            <PhoneInput country={"ua"} preferredCountries={["ua", "ru"]} />
          </div>
        </div>
      }
      page="/"
      addClassBtn="btn-big-form"
      btnText="Хочу доступ к «Общему делу»"
      additionalContainerBtn="additional-container-btn"
      additionalContainerPolicy="additional-container-policy"
      classArrow={classArrow}
      newClassContainerForInput={newClassContainerForInput}
    />
  );
}
