import { useEffect } from "react";
import { useLocation } from "react-router";
import { emailSend } from "../../services/fetchEmail";
import ButtonRedirect from "../ButtonRedirect";

export default function InfoView() {
  const { name, email, number, lastName } = useLocation();
  document.body.classList.add("body-styles");
  useEffect(() => {
    if (name || email || number || lastName !== undefined) {
      emailSend(name, email, lastName, number);
    }
  }, []);

  return (
    <div className="container">
      <div className="container-thanks">
        <p className="text-thanks">
          В течении 24 часов на указанный email придет письмо с подробной
          инструкцией.
          <br />
          Если письмо не появилось в папке «Входящие», проверьте папку «Спам».
          <br />
          Если вы не получили письмо, пожалуйста, обратитесь в тех. поддержку.
          После получения письма:
          <br />
          1. Добавьте адрес отправителя в контакты
          <br />
          2. Если письмо попало в папку «Спам», выделите его и нажмите «Не
          спам», чтобы в дальнейшем гарантированно получать всю важную
          информацию по проекту «Общее дело».
          <br />
          Не забудьте нажать кнопку "Ок"
        </p>
      </div>
      <div className="container-btn-thanks">
        <ButtonRedirect addClassBtn="btn-home" redirect="/">
          На главную
        </ButtonRedirect>
      </div>
    </div>
  );
}
