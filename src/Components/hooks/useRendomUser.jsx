import { useState, useEffect } from "react";
import { userFetch } from "../../services/fetchUser";
export default function useRendomUser() {
  const [user, setUser] = useState([]);
  const [intId, setIntId] = useState(null);
  useEffect(() => {
    return () => clearEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  };

  const generateRandomNumber = () => {
    const random = Math.random() * (60 - 600) + 600;
    return Math.floor(random * 100) / 100;
  };

  return { user, generateRandomNumber };
}
