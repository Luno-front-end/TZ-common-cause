import { useEffect, useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";

import FormRegInfo from "./FormRegInfo";

export default function SectionFormInfo({ page }) {
  return (
    <section className="section-reg">
      <div className="container">
        <div className="container-regInfo">
          <div className="wrapper-formInfo">
            <FormRegInfo page={page} />
          </div>

          <div className="general-container-info">
            <h4 className="heading-sec-info">
              Личная помощь основателя и круглосуточная поддержка команды:
            </h4>
            <p className="paragraph-sec-info">
              Мы обеспечили круглосуточную поддержку пользователей «Общего
              дела». Вы получите необходимую помощь в любое время суток. Чтобы
              обратиться к эксперту, активируйте чат, находящийся справа внизу
              страницы.
              <br />
              <br />
              Внимание! Чат доступен только зарегистрированным пользователям.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
