import { Link } from "react-router-dom";

import logo from "../../images/main-logo.png";

export default function Header() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img className="logo" src={logo} alt="Общее дело" />
      </Link>
    </div>
  );
}
