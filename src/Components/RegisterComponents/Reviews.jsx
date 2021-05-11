import { useEffect, useState } from "react";
import { userFetch } from "../../services/fetchUser";

// import { users } from "../../users.json";

export default function Reviews() {
  const [user, setUser] = useState([]);
  const [intId, setIntId] = useState(null);
  useEffect(() => {
    return () => clearEffect();
  }, []);

  useEffect(() => {
    if (user.length >= 2) {
      user.splice(0, 1);
    }
  }, [user]);

  useEffect(() => {
    userSet();
    userSet();
    setIntId(
      setInterval(() => {
        userSet();
      }, 5000)
    );
  }, []);
  // console.log();
  const userSet = () => {
    userFetch().then((users) => {
      if (user.length === 0) {
        setUser((prevState) => [...prevState, ...users]);

        return;
      }

      setUser(...users);
    });
  };

  const clearEffect = () => {
    clearInterval(intId);
    setIntId(null);
    // setUser([]);
  };

  const generateRandomNumber = () => {
    const random = Math.random() * (60 - 600) + 600;
    return Math.floor(random * 100) / 100;
  };
  // console.log(generateRandomNumber());

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
                  <p className="earnings-reviews">$ {generateRandomNumber()}</p>
                </div>
              </li>
            ))}

            {/* <li className="item-reviews">
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
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
}
