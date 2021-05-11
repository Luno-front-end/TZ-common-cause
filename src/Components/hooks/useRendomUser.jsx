import { useState, useEffect } from "react";
import { userFetch } from "../../services/fetchUser";
import { man } from "../../users.json";
export default function useRendomUser() {
  const [user, setUser] = useState([]);
  const [intId, setIntId] = useState(null);
  useEffect(() => {
    return () => clearEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   const pushFn = () => {
  //     kaka.mony = generateRandomNumber();
  //   };
  //   console.log(kaka);

  useEffect(() => {
    if (user.length >= 2) {
      user.splice(0, 1);
    }
  }, [user]);

  //   useEffect(() => {
  //     fn1();
  //   });

  //   const fn1 = () => {
  //     if (user.length === 0) {
  //       setUser((prevState) => [...prevState, man]);
  //     } else if (user.length === 2) {
  //       return;
  //     }
  //   };
  console.log(user);
  //   console.log("json", man);

  useEffect(() => {
    userSet();
    userSet();
    setIntId(
      setInterval(() => {
        userSet();
      }, 5000)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userSet = () => {
    userFetch().then((users) => {
      users.map((users) => {
        users.money = generateRandomNumber();
        return setUser((prevState) => [...prevState, users]);
      });
    });
  };
  //   console.log(user);

  const clearEffect = () => {
    clearInterval(intId);
    setIntId(null);
  };

  const generateRandomNumber = () => {
    const random = Math.random() * (60 - 600) + 600;
    return Math.floor(random * 100) / 100;
  };

  return { user };
}
