import { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { emailSend } from "../../services/fetchEmail";
import ButtonRedirect from "../ButtonRedirect";

export default function InfoView() {
  // const { name, email, number, lastName } = useLocation();
  // document.body.classList.add("body-styles");
  // document.body.classList.re("body-reg-styles");
  // useEffect(() => {
  //   if (name || email || number || lastName !== undefined) {
  //     emailSend(name, email, lastName, number);
  //   }
  // }, []);

  return (
    <div className="container-thanks">
      <div className="container">
        <ul className="list-thanks">
          <li className="text-thanks">
            <p>
              В течении 24 часов на указанный email придет письмо с подробной
              инструкцией.
            </p>
          </li>
          <li className="text-thanks">
            <p>
              Если письмо не появилось в папке «Входящие», проверьте папку
              «Спам».
            </p>
          </li>
          <li className="text-thanks">
            <p>
              Если вы не получили письмо, пожалуйста, обратитесь в тех.
              поддержку. После получения письма:
            </p>
          </li>
          <li className="text-thanks">
            <p>1. Добавьте адрес отправителя в контакты</p>
          </li>
          <li className="text-thanks">
            <p>
              2. Если письмо попало в папку «Спам», выделите его и нажмите «Не
              спам», чтобы в дальнейшем гарантированно получать всю важную
              информацию по проекту «Общее дело».
            </p>
          </li>
          <li className="text-thanks">
            <p>Не забудьте нажать кнопку "Ок"</p>
          </li>
        </ul>

        <div className="container-btn-thanks">
          <Link className="btn-home" to="/">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
