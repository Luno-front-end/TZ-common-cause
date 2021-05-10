import userOne from "../../images/users/11.jpg";
import usertwo from "../../images/users/100.jpg";

export default function Reviews() {
  return (
    <section className="section-reviews">
      <h2 className="heading-one-reviews">Отлично! Вы справились!</h2>
      <div className="container-reviews">
        <h3 className="heading-two-reviews">
          Добро пожаловать в «Общее дело».
        </h3>

        <article className="card-reviews">
          <p className="real-reviews">
            Реальные отзывы от пользователей программы «Общее дело»:
          </p>
          <ul className="list-reviews">
            <li className="item-reviews">
              <img src={userOne} alt="user" className="img-user-reviews" />

              <div className="containerinfo-card-reviews">
                <h4 className="heading-user-reviews">Михаил</h4>
                <p className="info-reviews">только что заработал(а)</p>
                <p className="earnings-reviews">$ 333.33</p>
              </div>
            </li>
            <li className="item-reviews">
              <img src={usertwo} alt="user" className="img-user-reviews" />

              <div className="containerinfo-card-reviews">
                <h4 className="heading-user-reviews">Руслан</h4>
                <p className="info-reviews">только что заработал(а)</p>
                <p className="earnings-reviews">$ 333.33</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
