import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <ul className="container-list-footer">
        <li className="container-item-footer">
          <Link target="_blank" className="footer-link" to="/policy">
            Политика конфиденциальности
          </Link>
        </li>
        <li className="container-item-footer">
          <Link target="_blank" className="footer-link" to="/agreement">
            Пользовательское соглашение
          </Link>
        </li>
      </ul>
      <p className="copiright">Copyright © 2021 – Общее дело</p>
    </>
  );
}
