import useRendomUser from "../hooks/useRendomUser";

export default function Reviews() {
  const { user } = useRendomUser();
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
            {user.map((user) => (
              <li key={user.login.salt} className="item-reviews">
                <img
                  src={user.picture.large}
                  alt="user"
                  className="img-user-reviews"
                />

                <div className="containerinfo-card-reviews">
                  <h4 className="heading-user-reviews">{user.name.first}</h4>
                  <p className="info-reviews">только что заработал(а)</p>
                  <p className="earnings-reviews">$ {user.money}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

// ,

//   {
//     "name": {
//       "first": "Stefan"
//     },
//     "picture": {
//       "large": "https://twowords.info/public/img/users/14.jpg"
//     },
//     "login": {
//       "salt": "2"
//     }
//   }
