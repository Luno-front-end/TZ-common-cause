import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { emailSend } from "../../services/fetchEmail";
import "react-toastify/dist/ReactToastify.css";

export default function useSendForm(page) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState(null);

  const history = useHistory();
  const { pathname, nameProp, emailProp } = useLocation();

  useEffect(() => {
    if (nameProp) {
      setName(nameProp);
    }
    if (emailProp) {
      setEmail(emailProp);
    }
    return () => clearValue();
  }, [emailProp, nameProp]);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);

        break;
      case "email":
        setEmail(value);

        break;
      case "lastName":
        setLastName(value);

        break;
      default:
        break;
    }
  };

  const onChangeNumber = (e) => {
    setNumber(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      if (name === "") {
        toast.error("Вы не ввели имя", { position: "top-center" });
        return;
      }
      if (email === "") {
        toast.error("Вы не ввели почту", { position: "top-center" });
        return;
      }
    }

    setLink("/registration");

    if (pathname !== "/registration") {
      return;
    }

    setLink("");

    if (name === "") {
      toast.error("Вы не ввели имя", { position: "top-center" });
      return;
    }
    if (email === "") {
      toast.error("Вы не ввели почту", { position: "top-center" });
      return;
    }

    if (lastName === "") {
      toast.error("Вы не ввели фамилию", { position: "top-center" });
      return;
    }
    if (number === "") {
      toast.error("Вы не ввели номер", { position: "top-center" });
      return;
    }
    setLink(page);
    emailSend(name, email, lastName, number);
  };

  const clearValue = () => {
    setName("");
    setEmail("");
    setLastName("");
    setNumber("");
    setLink(null);
  };

  return {
    link,
    name,
    email,
    lastName,
    number,
    history,
    pathname,
    onChange,
    onChangeNumber,
    onSubmit,
  };
}
