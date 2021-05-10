import stepOne from "../../images/step-one.png";
import stepTwo from "../../images/step-two.png";
import stepThree from "../../images/step-three.png";
import stepFour from "../../images/step-four.png";

export default function BodySteps() {
  return (
    <div className="container-steps">
      <div className="container">
        <ul className="list-steps">
          <li className="item-steps">
            {/* <img src={stepOne} alt="" /> */}
            Пройдите регистрацию
          </li>
          <li className="item-steps">
            {/* <img src={stepTwo} alt="" /> */}
            Создайте аккаунт
          </li>
          <li className="item-steps">
            {/* <img src={stepThree} alt="" /> */}
            Получите доступ к программе
          </li>
          <li className="item-steps">
            {/* <img src={stepFour} alt="" /> */}
            Вы в деле
          </li>
        </ul>
      </div>
    </div>
  );
}
