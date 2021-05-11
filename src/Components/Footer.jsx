import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      <ul className="container-list-footer">
        <li className="container-item-footer">
          <Link
            target="_blank"
            className={
              pathname === "/registration" ? "footer-link-reg" : "footer-link"
            }
            to="/policy"
          >
            Политика конфиденциальности
          </Link>
        </li>
        <li className="container-item-footer">
          <Link
            target="_blank"
            className={
              pathname === "/registration" ? "footer-link-reg" : "footer-link"
            }
            to="/agreement"
          >
            Пользовательское соглашение
          </Link>
        </li>
      </ul>
      <p className="copiright">Copyright © 2021 – Общее дело</p>
    </>
  );
}
